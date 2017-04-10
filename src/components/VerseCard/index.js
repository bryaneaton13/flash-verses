
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

import Touchable from '../Touchable';
import Icon from '../Icon';
import Text from '../Text';
import Flex from '../Flex';
import Translation from '../Translation';

class VerseCard extends Component { // eslint-disable-line
  render() {
    const { verse, onRemove, suggested, onAdd } = this.props;
    return (
      <Flex direction="column" self="stretch" style={[styles.verse, suggested ? styles.suggested : null]}>
        <Text style={styles.book}>
          {verse.displayLocation} { suggested ? ' (Popular)' : ''}
        </Text>
        <Text style={styles.text}>
          {verse.text}
        </Text>
        <Flex direction="row" self="stretch" align="center">
          <Translation type={verse.translation} />
          <Flex value={1} direction="row" justify="end" align="center" self="stretch">
            {
              onRemove ? (
                <Touchable onPress={onRemove}>
                  <Text style={styles.removeButton}>REMOVE</Text>
                </Touchable>
              ) : null
            }
            {
              onAdd ? (
                <Touchable onPress={onAdd}>
                  <Text style={styles.addButton}>ADD</Text>
                </Touchable>
              ) : null
            }
          </Flex>
        </Flex>
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
  suggested: PropTypes.bool,
};

export default VerseCard;
