import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flex: 3,
    flexGrow: 3,
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  iconContainer: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: Platform.OS === 'ios' ? 'center' : 'flex-start',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 2,
    flexGrow: 2,
    flexShrink: 1,
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#000',
  },
  iconText: {
    fontSize: 16,
    color: '#000',
    width: 'auto',
  },
  emptyContainer: {
    flex: 0.5,
  },
});

export default styles;
