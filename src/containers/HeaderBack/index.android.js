
import React, { Component, PropTypes } from 'react';
import { BackAndroid } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

import { goToAction } from '../../actions/navigation';

class HeaderBack extends Component { // eslint-disable-line

  constructor(props) {
    super(props);

    this.androidBackEvent = this.androidBackEvent.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.androidBackEvent);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.androidBackEvent);
  }

  androidBackEvent() {
    this.props.dispatch(goToAction('home'));
    return true;
  }

  goBack() {
    this.props.dispatch(goToAction('home'));
  }

  render() {
    const { title, ...rest } = this.props;
    return (
      <Icon.ToolbarAndroid
        {...rest}
        title={title}
        style={styles.header}
        titleColor="white"
        navIconName="arrow-back"
        onIconClicked={this.goBack}
      />
    );
  }
}

HeaderBack.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
  title: PropTypes.string,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

export default connect(mapDispatchToProps)(HeaderBack);
