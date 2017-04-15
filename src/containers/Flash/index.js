
import React, { Component, PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import shuffle from 'lodash/shuffle';
import styles from './styles';

import HeaderBack from '../HeaderBack';

import { Flex, Icon, Text, Button, Touchable } from '../../components/common';
import Translation from '../../components/Translation';

function replaceVerseText(text) {
  // Remove some characters and then replace all words and numbers with a blank special character
  return text.replace(/[?\-—–_.,:;'"$#&@!*+={}&()]/ig, '').replace(/[a-zA-Z0-9]/ig, '\u25a1');
}

class Flash extends Component { // eslint-disable-line

  constructor(props) {
    super(props);

    const verses = shuffle(props.verses);

    this.state = {
      verses,
      activeIndex: 0,
      totalCount: verses.length,
      disableNext: false,
      isVisible: false,
    };

    this.handleNext = this.handleNext.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(this.nextTimeout);
  }

  scrollToTop() {
    this.scrollView && this.scrollView.scrollTo({ y: 0 });
  }

  getActiveVerse() {
    return this.state.verses[this.state.activeIndex] || null;
  }

  handleNext() {
    if (this.state.disableNext) return;
    this.scrollToTop();
    this.setState({
      disableNext: true,
      activeIndex: this.state.activeIndex + 1,
      isVisible: false,
    });
    this.nextTimeout = setTimeout(() => this.setState({ disableNext: false }), 500);
  }

  handleRestart() {
    this.scrollToTop();
    this.setState({
      verses: shuffle(this.props.verses),
      activeIndex: 0,
      isVisible: false,
    });
  }

  handleBack() {
    this.scrollToTop();
    const newIndex = this.state.activeIndex - 1 >= 0 ? this.state.activeIndex - 1 : 0;
    this.setState({
      activeIndex: newIndex,
      isVisible: false,
    });
  }

  renderWholeVerse() {
    const { isVisible } = this.state;
    const verse = this.getActiveVerse();
    if (!verse) return null;

    const text = isVisible ? verse.text : replaceVerseText(verse.text);
    return (
      <View style={[styles.card, styles.verseCard]}>
        <ScrollView ref={(c) => this.scrollView = c} style={{ alignSelf: 'stretch' }} contentContainerStyle={styles.verseCardScroll}>
          <Flex direction="row" self="stretch" style={styles.translation}>
            {/* <Flex value={1} /> */}
            <Translation type={verse.translation} />
          </Flex>
          <Text style={[styles.text, !isVisible ? styles.invisible : null]}>
            {text}
          </Text>
        </ScrollView>
        {
          !isVisible ? (
            <Touchable onPress={() => this.setState({ isVisible: !isVisible })}>
              <View style={styles.overlay}>
                <Text style={styles.overlayText}>
                  Tap to reveal
                </Text>
              </View>
            </Touchable>
          ) : null
        }
      </View>
    );
  }

  renderVerseLocation() {
    const verse = this.getActiveVerse();
    if (!verse) return null;
    return (
      <Flex align="center" justify="center" style={[styles.card, styles.locationCard]}>
        <Text style={styles.book}>
          {verse.displayLocation}
        </Text>
      </Flex>
    );
  }

  render() {
    const canGoBack = this.state.activeIndex > 0;
    const canGoNext = this.state.activeIndex < this.state.totalCount;
    const canReset = this.state.activeIndex >= this.state.totalCount;

    return (
      <View style={styles.container}>
        <HeaderBack title="Flash Cards" />
        {
          canReset ? (
            <View style={styles.finishedContent}>
              <Button onPress={this.handleRestart} style={styles.restart} text="Start Over" />
            </View>
          ) : (
            <View style={styles.content}>
              { this.renderVerseLocation() }
              { this.renderWholeVerse() }
              <Flex direction="row" justify="center" style={styles.buttonWrap}>
                <Flex value={1}>
                  <Button
                    onPress={this.handleBack}
                    style={styles.back}
                    text="Back"
                    disabled={!canGoBack || canReset}
                  />
                </Flex>
                <Flex value={2}>
                  {
                    this.state.isVisible ? (
                      <Flex align="center" justify="center">
                        <Button onPress={() => this.setState({ isVisible: false })} style={styles.restart} icon="refresh" />
                      </Flex>
                    ) : null
                  }
                </Flex>
                <Flex value={1}>
                  <Button
                    onPress={this.handleNext}
                    style={styles.next}
                    text="Next"
                    disabled={!canGoNext}
                  />
                </Flex>
              </Flex>
            </View>
          )
        }
      </View>
    );
  }
}

Flash.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
  verses: PropTypes.array.isRequired, // Redux
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = ({ verses }) => ({
  verses: verses.mine,
});

export default connect(mapStateToProps, mapDispatchToProps)(Flash);
