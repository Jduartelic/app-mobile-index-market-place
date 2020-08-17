import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { colors } from '../../../utils/sharedStyles';
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.LoaderContainer}>
      <ActivityIndicator size="large" color={colors.colorPrimaryBice} />
    </View>
  );
};

export default Loader;
