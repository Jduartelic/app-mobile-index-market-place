import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/sharedStyles';
// import { getRandomColor } from '../../../utils/constants';

const styles = StyleSheet.create({
  ProductBoxContainer: (index) => ({
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: getRandomColor(),
    paddingTop: index > 0 ? 0 : 20,
    paddingBottom: 20,
  }),
  ProductBoxContentContainer: {
    flex: 6,
    flexDirection: 'column',
    width: '95%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 8,
    borderColor: '#f9f9f9',
    padding: 20,
    alignSelf: 'center',
    borderWidth: 2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  ProductBoxContainerTitleKey: {
    flex: 1,
    flexDirection: 'column',
    width: 'auto',
    borderRadius: 5,
    backgroundColor: colors.colorPrimaryBice,
    marginBottom: 5,
  },

  ProductBoxContainerTitleName: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },

  ProductBoxContainerPriceSymbol: {
    flex: 3,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 5,
  },

  ProductBoxContainerTitleDate: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-end',
  },
  ProductBoxTitleKey: {
    fontSize: 10,
    fontFamily: 'NewYorkMedium-Black',
    color: colors.colorWhite,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  ProductBoxTitleName: {
    fontSize: 16,
    fontFamily: 'NewYorkMedium-Black',
    color: colors.colorPrimaryGrayDark,
    marginVertical: 5,
  },
  ProductBoxTitleAmount: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: colors.colorPrimaryGreen,
  },
  ProductBoxTitleSymbol: {
    fontSize: 14,
    fontFamily: 'NewYorkLarge-Medium',
    color: colors.colorPrimaryGrayLight,
  },
  ProductBoxTitleDate: {
    fontSize: 14,
    fontFamily: 'NewYorkMedium-Bold',
    color: colors.colorPrimaryGrayDark,
  },
});

export default styles;
