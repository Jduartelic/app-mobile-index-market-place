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
    color: '#fff',
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  ProductBoxTitleName: {
    fontSize: 16,
    fontFamily: 'NewYorkMedium-Black',
    color: '#292929',
    marginVertical: 5,
  },
  ProductBoxTitleAmount: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#048a28',
  },
  ProductBoxTitleSymbol: {
    fontSize: 14,
    fontFamily: 'NewYorkLarge-Medium',
    color: '#606060',
  },
  ProductBoxTitleDate: {
    fontSize: 14,
    fontFamily: 'NewYorkMedium-Bold',
    color: '#292929',
  },
});

export default styles;

// .product-boxcontainer {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: auto;
//   align-items: center;
//   justify-content: center;
// }

// .product-boxcontent-container {
//   display: flex;
//   flex-direction: column;
//   width: 95%;
//   height: auto;
//   border-radius: 1rem;
//   border: 1px solid $color-neutral-gray-principal;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.14);
// }

// .product-boxcontent {
//   display: flex;
//   flex-direction: column;
//   width: 90%;
//   height: auto;
//   align-items: center;
//   justify-content: center;
//   margin: 1rem;
// }

// .product-boxheader-commodity {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// }

// .product-boxbrand-title {
//   font: $subtitle1;
//   color: $color-white;
//   padding: 0.4rem 1rem;
//   background: $color-primary-bice;
//   width: fit-content;
//   text-transform: uppercase;
//   border-radius: 0.45rem;
//   text-align: center;
//   margin-bottom: 0.5rem;
// }

// .product-boxmain-title {
//   font: $h3-xs-bold;
//   color: $color-neutral-gray-gray;
// }

// .product-boxcontent-commodity {
//   display: flex;
//   width: 100%;
//   padding: 1rem 0;
//   align-items: flex-end;
// }

// .product-boxprice-title {
//   font: $h3-xs-bold;
//   color: $color-primary-green;
// }
// .product-boxunit-title {
//   font: $body1;
//   color: $color-neutral-gray-gray;
// }

// .product-boxfooter-commodity {
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   align-items: flex-end;
// }
// .product-boxdate-title {
//   font: $subtitle2;
//   color: $color-neutral-gray-dark;
// }
