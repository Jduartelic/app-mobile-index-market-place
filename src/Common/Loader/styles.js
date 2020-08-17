import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/sharedStyles';

const styles = StyleSheet.create({
  LoaderContainer: {
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorWhite,
  },
});

export default styles;
