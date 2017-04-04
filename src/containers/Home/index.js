
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import Text from '../../components/Text';

class Home extends Component { // eslint-disable-line
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
      </View>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
