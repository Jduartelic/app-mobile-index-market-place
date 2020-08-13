import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../utils/sharedStyles';
import styles from './styles';

const NavBar = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.iconContainer}>
        <Icon name="bars" size={30} color={colors.colorPrimaryBice} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Stock Market</Text>
      </View>
      <View style={styles.emptyContainer} />
    </View>
  );
};

export default NavBar;
