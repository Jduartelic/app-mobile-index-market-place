import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/sharedStyles';
// import { getRandomColor } from '../../../utils/constants';

const styles = StyleSheet.create({
  DetailInfoContainer: {
    flex: 6,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // paddingBottom: 20,
    // backgroundColor: 'red',
  },
  DetailInfoHeaderContainer: {
    flex: 1,
    flexShrink: 1,
    flexGrow: 0,
    flexBasis: Dimensions.get('window').height * 0.1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    // backgroundColor: 'gray',
  },
  DetailInfoKeyContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  DetailInfoKey: {
    fontSize: 18,
    fontFamily: 'RobotoCondensed-Bold',
    color: colors.colorPrimaryBice,
  },
  DetailInfoSymbolContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  DetailInfoSymbol: {
    fontSize: 18,
    fontFamily: 'RobotoCondensed-Bold',
    color: colors.colorPrimaryGreen,
  },

  DetailInfoCurrency: {
    fontSize: 14,
    fontFamily: 'RobotoCondensed-Bold',
    color: colors.colorPrimaryGrayLight,
  },
  DetailInfoDateContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  DetailInfoDate: {
    fontSize: 18,
    fontFamily: 'RobotoCondensed-Bold',
    color: colors.colorPrimaryGrayLight,
  },
  DetailInfoChartContainer: {
    flex: 2,
    flexShrink: 1,
    flexGrow: 0,
    flexBasis: Dimensions.get('window').height * 0.4,
    flexDirection: 'column',
    width: '100%',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: 'purple',
  },

  DetailInfoHistoryContainer: {
    flex: 3,
    // flexGrow: 1,
    // flexShrink: 1,
    flexDirection: 'column-reverse',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  //   ProductBoxTitleKey: {
  //     fontSize: 10,
  //     fontFamily: 'Roboto-Bold',
  //     color: colors.colorWhite,
  //     paddingHorizontal: 7,
  //     paddingVertical: 5,
  //   },
  //   ProductBoxTitleName: {
  //     fontSize: 16,
  //     fontFamily: 'Roboto-Bold',
  //     color: colors.colorPrimaryGrayDark,
  //     marginVertical: 5,
  //   },
  //   ProductBoxTitleAmount: {
  //     fontSize: 18,
  //     fontFamily: 'Roboto-Bold',
  //     color: colors.colorPrimaryGreen,
  //   },
  //   ProductBoxTitleSymbol: {
  //     fontSize: 14,
  //     fontFamily: 'RobotoCondensed-Regular',
  //     color: colors.colorPrimaryGrayLight,
  //     lineHeight: 22,
  //   },
  //   ProductBoxTitleDate: {
  //     fontSize: 14,
  //     fontFamily: 'RobotoCondensed-Regular',
  //     color: colors.colorPrimaryGrayDark,
  //   },
});

export default styles;
