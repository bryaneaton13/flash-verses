
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

import { Button, Text, Flex, Icon } from '../common';
import Touchable from '../Touchable';
import Translation from '../Translation';

class VerseCard extends Component { // eslint-disable-line

  renderOptions() {
    const { onRemove, onAdd, onSkip } = this.props;
    return (
      <Flex direction="row" justify="end" align="center" self="stretch">
        {
          onRemove ? (
            <Button
              onPress={onRemove}
              style={styles.button}
              buttonStyle={[styles.buttonText, styles.removeButton]}
              text="REMOVE"
            />
          ) : null
        }
        {
          onSkip ? (
            <Button
              onPress={onSkip}
              style={styles.button}
              buttonStyle={[styles.buttonText, styles.skipButton]}
              text="NEW"
            />
          ) : null
        }
        {
          onAdd ? (
            <Button
              onPress={onAdd}
              style={styles.button}
              buttonStyle={[styles.buttonText, styles.addButton]}
              text="ADD"
            />
          ) : null
        }
      </Flex>
    );
  }
  render() {
    const { verse, suggested } = this.props;
    return (
      <Flex direction="column" self="stretch" style={[styles.verse, suggested ? styles.suggested : null]}>
        <Flex direction="row" align="center" style={styles.topWrap}>
          <Text style={styles.book}>
            {verse.displayLocation} { suggested ? ' (Popular)' : ''}
          </Text>
          { this.renderOptions() }
        </Flex>
        <Text style={styles.text}>
          {verse.text}
        </Text>
        <Translation type={verse.translation} />
      </Flex>
    );
  }
}

VerseCard.propTypes = {
  verse: PropTypes.shape({
    book: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    translation: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func,
  onAdd: PropTypes.func,
  onSkip: PropTypes.func,
  suggested: PropTypes.bool,
};

export default VerseCard;
