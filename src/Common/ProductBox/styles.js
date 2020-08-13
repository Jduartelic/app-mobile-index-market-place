import { StyleSheet } from 'react-native';
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
    alignItems: 'center',
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
    width: '100%',
  },

  ProductBoxContainerTitleName: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },

  ProductBoxContainerPriceSymbol: {
    flex: 3,
    flexDirection: 'column',
    width: '100%',
  },

  ProductBoxContainerTitleDate: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
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
