import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../../utils/sharedStyles';

const styles = StyleSheet.create({
  HistoryValuesContainer: {
    flex: 2,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: colors.colorPrimaryBice,
  },
  HistoryValuesNameTextContainer: {
    flex: 1,
    flexDirection: 'row',
    // width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    backgroundColor: colors.colorPrimaryBice,
    borderRadius: 8,
  },
  HistoryValueInfoContainer: {
    flex: 2,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
  },
  HistoryValuesAmountContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-start',
  },
  HistoryValueDateContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'flex-end',
  },
  HistoryValuesNameText: {
    fontSize: 16,
    fontFamily: 'RobotoCondensed-Bold',
    color: colors.colorWhite,
  },
  HistoryValuesAmountText: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: colors.colorPrimaryGreen,
  },
  HistoryValuesCurrencyText: {
    fontSize: 14,
    fontFamily: 'RobotoCondensed-Regular',
    color: colors.colorPrimaryGrayLight,
    lineHeight: 22,
  },
  HistoryValuesDateText: {
    fontSize: 18,
    fontFamily: 'RobotoCondensed-Regular',
    color: colors.colorPrimaryGrayDark,
  },
});

export default styles;
