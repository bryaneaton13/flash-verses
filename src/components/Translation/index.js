
import React, { PropTypes } from 'react';
import styles from './styles';

import Text from '../../components/Text';

function Translation({ type }) {
  return (
    <Text style={styles.translation}>
      {type.toUpperCase()}
    </Text>
  );
}

Translation.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Translation;
