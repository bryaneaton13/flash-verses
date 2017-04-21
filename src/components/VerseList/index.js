
import React, { Component, PropTypes } from 'react';
import { View, ScrollView } from 'react-native';
import range from 'lodash/range';
import styles from './styles';

import { Text, Touchable } from '../common';

class ChapterList extends Component {

  constructor(props) {
    super(props);

    this.arr = range(props.count);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(number) {
    return (
      <Touchable key={`chapter_${number}`} onPress={() => this.props.onSelect(number)}>
        <View style={styles.wrap}>
          <Text style={styles.text}>{number}</Text>
        </View>
      </Touchable>
    );
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.container}
      >
        { this.arr.map(this.renderRow) }
      </ScrollView>
    );
  }
}

ChapterList.propTypes = {
  count: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ChapterList;
