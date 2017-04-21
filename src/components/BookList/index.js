
import React, { Component, PropTypes } from 'react';
import { View, ListView } from 'react-native';
import styles from './styles';

import { BIBLE_BOOKS } from '../../utils/bible';

import { Text, Touchable } from '../common';
import Separator from '../Separator';

class BookList extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      getSectionData: (dataBlob, sectionId) => dataBlob[sectionId],
      getRowData: (dataBlob, sectionId, rowId) => ({ book: rowId, chapters: dataBlob[sectionId][rowId] }),
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
    });
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(BIBLE_BOOKS),
    };

    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  renderSectionHeader(sectionData, sectionId) {
    const text = sectionId === 'OT' ? 'Old Testament' : 'New Testament';
    return (
      <View style={styles.section}>
        <Text style={styles.sectionText}>{text}</Text>
      </View>
    );
  }

  renderRow(rowData) {
    return (
      <Touchable onPress={() => this.props.onSelect(rowData.book, rowData.chapters)}>
        <View style={styles.row}>
          <Text style={styles.bookText}>{rowData.book}</Text>
        </View>
      </Touchable>
    );
  }

  render() {
    return (
      <ListView
        initialListSize={12}
        pageSize={75}
        style={{ flex: 1, alignSelf: 'stretch' }}
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow}
        renderSeparator={(sectionID, rowID) => <Separator key={rowID} />}
        renderSectionHeader={this.renderSectionHeader}
        scrollsToTop={true}
      />
    );
  }
}

BookList.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default BookList;
