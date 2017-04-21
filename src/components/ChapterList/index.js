
import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import range from 'lodash/range';
import styles from './styles';

import SelectNumber from '../SelectNumber';

class ChapterList extends Component {

  constructor(props) {
    super(props);

    this.arr = range(1, Number(props.count) + 1);

    this.renderRow = this.renderRow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.count !== this.props.count) {
      this.arr = range(1, Number(nextProps.count) + 1);
    }
  }

  renderRow(number) {
    const { selected, onSelect } = this.props;
    const isSelected = Array.isArray(selected) ? selected.indexOf(number) >= 0 : number === Number(selected);
    return (
      <SelectNumber
        key={number}
        number={number}
        isSelected={isSelected}
        onSelect={onSelect}
      />
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
  count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
};

export default ChapterList;
