
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import HeaderBack from '../HeaderBack';
import { Flex, Text } from '../../components/common';

class Settings extends Component { // eslint-disable-line

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <HeaderBack title="Settings" />
        <Flex align="center" justify="center" value={1}>
          <Text>Settings view!</Text>
        </Flex>
      </View>
    );
  }
}

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
  verses: PropTypes.array.isRequired, // Redux
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = ({ verses }) => ({

  verses: verses.mine,
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
