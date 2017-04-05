
import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import Text from '../../components/Text';
import Flex from '../../components/Flex';

class Home extends Component { // eslint-disable-line
  render() {
    const { mine } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.content}>
          <Text>Hello!</Text>
          {
            mine.map((v) => (
              <Flex direction="column" key={v.id} style={styles.verses}>
                <Text style={styles.book}>
                  {v.book} {v.position}
                </Text>
                <Text style={styles.text}>
                  {v.text}
                </Text>
                <Text style={styles.translation}>
                  {v.translation}
                </Text>
              </Flex>
            ))
          }
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  // dispatch: PropTypes.func.isRequired, // Redux
  mine: PropTypes.array.isRequired, // Redux
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = ({ verses }) => ({
  mine: verses.mine,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
