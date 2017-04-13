
import React, { Component, PropTypes } from 'react';
import { View, ListView, Alert, RefreshControl } from 'react-native';
import { connect } from 'react-redux';
import Snackbar from 'react-native-snackbar';
import styles from './styles';

import { removeVerseAction, newSuggestionAction } from '../../actions/verses';

import HeaderHome from '../HeaderHome';
import SuggestedVerse from '../SuggestedVerse';

import { Icon, Touchable } from '../../components/common';
import VerseCard from '../../components/VerseCard';

class Home extends Component { // eslint-disable-line

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id || r1.isSuggested !== r2.isSuggested,
    });
    this.state = {
      snackbarShowing: false,
      refreshing: false,
      dataSource: ds.cloneWithRows(props.verses),
    };

    this.timeout = null;

    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ dataSource: this.state.dataSource.cloneWithRows(nextProps.verses) });
  }

  handleRefresh() {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.props.dispatch(newSuggestionAction());
      this.setState({ refreshing: false });
    }, 500);
  }

  handleRemove(verse) {
    Alert.alert(
      'Remove?',
      `Are you sure you want to remove ${verse.displayLocation} from your list?`,
      [
        { text: 'No' },
        {
          text: 'Yes',
          onPress: () => {
            this.props.dispatch(removeVerseAction(verse));

            Snackbar.show({
              title: `${verse.displayLocation} has been removed.`,
              duration: Snackbar.LENGTH_LONG,
            });


            // Need to move the button above the snackbar for the time it's showing
            if (this.timeout) clearTimeout(this.timeout);
            this.setState({ snackbarShowing: true });
            this.timeout = setTimeout(() => this.setState({ snackbarShowing: false }), 3000);
          },
        },
      ],
    );
  }

  renderRow(verse) {
    if (verse.suggested) {
      return <SuggestedVerse verse={verse} />;
    }
    return (
      <VerseCard
        verse={verse}
        onRemove={() => this.handleRemove(verse)}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderHome />
        <ListView
          refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this.handleRefresh} />}
          initialListSize={4}
          pageSize={3}
          style={{ flex: 1 }}
          enableEmptySections={true}
          contentContainerStyle={styles.content}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
        <Touchable onPress={() => console.warn('go to search page')}>
          <View style={[styles.button, this.state.snackbarShowing ? { bottom: 56 } : null]}>
            <Icon name="add" style={styles.buttonIcon} />
          </View>
        </Touchable>
      </View>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
  verses: PropTypes.array.isRequired, // Redux
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = ({ verses }) => {
  let homeVerses;
  if (verses.suggested) {
    homeVerses = [verses.suggested, ...verses.mine];
  } else {
    homeVerses = verses.mine;
  }
  return {
    verses: homeVerses,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
