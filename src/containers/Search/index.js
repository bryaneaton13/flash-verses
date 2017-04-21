
import React, { Component, PropTypes } from 'react';
import { View, BackAndroid } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { CHAPTER_VERSES } from '../../utils/bible';

import { goToAction } from '../../actions/navigation';
import { addVerseAction } from '../../actions/verses';

import HeaderBack from '../HeaderBack';

import { Flex, Text } from '../../components/common';
import VerseCard from '../../components/VerseCard';
import BookList from '../../components/BookList';
import ChapterList from '../../components/ChapterList';

function StepText({ position, activeIndex, text, onSelect }) { // eslint-disable-line
  return (
    <Text
      style={[
        styles.headerText,
        activeIndex > position ? styles.selectedText : null,
        activeIndex === position ? styles.activeText : null,
      ]}
      onPress={activeIndex > position ? onSelect : undefined}
    >
      {text}
    </Text>
  );
}

class Search extends Component { // eslint-disable-line

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
      book: '',
      numChapters: 1,
      chapter: '',
      numVerses: 1,
      verses: [],
    };

    this.setBook = this.setBook.bind(this);
    this.setChapter = this.setChapter.bind(this);
    this.setVerse = this.setVerse.bind(this);
    this.androidBackEvent = this.androidBackEvent.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.androidBackEvent);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.androidBackEvent);
  }

  androidBackEvent() {
    if (this.state.activeIndex > 0) {
      this.setState({ activeIndex: this.state.activeIndex - 1 });
    } else {
      this.props.dispatch(goToAction('home'));
    }
    return true;
  }

  setBook(book, chapterCount) {
    this.setState({
      book,
      numChapters: chapterCount,
      activeIndex: this.state.activeIndex + 1,
    });
  }

  setChapter(chapter) {
    const numVerses = CHAPTER_VERSES[this.state.book] && CHAPTER_VERSES[this.state.book][chapter.toString()];
    this.setState({
      chapter,
      numVerses: numVerses || 1,
      verses: [],
      activeIndex: this.state.activeIndex + 1,
    });
  }

  setVerse(verse) {
    let newVerses = this.state.verses;
    const newVerse = Number(verse);
    const largestElement = Math.max.apply(null, newVerses);
    const smallestElement = Math.min.apply(null, newVerses);

    if (newVerses.indexOf(newVerse) >= 0) {
      newVerses = newVerses.filter((v) => v < newVerse);
    } else if (newVerse !== largestElement + 1 && newVerse !== smallestElement - 1) {
      newVerses = [newVerse];
    } else {
      newVerses.push(newVerse);
    }
    this.setState({
      verses: newVerses,
    });
  }

  renderContent() {
    const { activeIndex, numChapters, chapter, numVerses, verses } = this.state;
    if (activeIndex === 0) {
      return <BookList onSelect={this.setBook} />;
    } else if (activeIndex === 1) {
      return <ChapterList count={numChapters} onSelect={this.setChapter} selected={chapter} />;
    } else if (activeIndex === 2) {
      return (
        <ChapterList
          count={numVerses}
          onSelect={this.setVerse}
          selected={verses}
        />
      );
    } else if (activeIndex === 3) {
      return (
        <View style={{ flex: 1, alignSelf: 'stretch' }}>
          <Text>Preview Step</Text>
          <VerseCard
            verse={{
              id: 'test',
              book: 'psalm',
              position: '25:1',
              displayLocation: 'Test 1:23',
              text: 'Need to look up the verse actually',
              translation: 'niv',
            }}
            onAdd={() => {
              // this.props.dispatch(addVerseAction(this.props.verse));
            }}
          />
        </View>
      );
    }
    return (
      <View>
        <Text>Do other selections</Text>
      </View>
    );
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <View style={styles.container}>
        <HeaderBack
          title="Add Verse"
          actions={activeIndex === 2 ? [
            { title: 'Preview', iconName: 'check', iconSize: 30, show: 'always' },
          ] : undefined}
          onActionSelected={() => this.setState({ activeIndex: 3 })}
        />
        <View style={styles.content}>
          <Flex direction="row" align="center" style={styles.stepWrap}>
            <StepText
              position={0}
              activeIndex={activeIndex}
              onSelect={() => this.setState({ activeIndex: 0 })}
              text="Book"
            />
            <StepText
              position={1}
              activeIndex={activeIndex}
              onSelect={() => this.setState({ activeIndex: 1 })}
              text="Chapter"
            />
            <StepText
              position={2}
              activeIndex={activeIndex}
              onSelect={() => this.setState({ activeIndex: 2 })}
              text="Verse"
            />
            <StepText
              position={3}
              activeIndex={activeIndex}
              onSelect={() => this.setState({ activeIndex: 3 })}
              text="Preview"
            />
          </Flex>
          { this.renderContent() }
        </View>
      </View>
    );
  }
}

Search.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = () => ({
  // verses: verses.mine,
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
