import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import { InfoCurrencys } from '../../../utils/constants';
import { usePrevious } from '../../../utils/customHooks';
import { detailnfoCommoditysGet } from '../../../redux/components/commodity/commodity.state';
import styles from './styles';

const ProductBox = (productBoxProps) => {
  const { detailnfoCommodity, commodity, navigation, detailnfoCommoditysGet } = productBoxProps;
  const { item, index } = commodity;
  const info = InfoCurrencys[item.unit];
  const date = new Date(item.date * 1000);
  const formattedDate = moment(date).format('DD/MM/YYYY');
  const prevProps = usePrevious({ detailnfoCommodity });

  useEffect(() => {
    if (
      prevProps &&
      prevProps.detailnfoCommodity !== detailnfoCommodity &&
      Object.keys(detailnfoCommodity).length > 0
    ) {
      if (detailnfoCommodity.key === item.key) {
        navigation.navigate('DetailInfo', {
          screen: 'DetailInfoScreen',
          params: {
            keyCommodity: item.key,
          },
        });
      }
    }
  });

  return (
    <View style={styles.ProductBoxContainer(index)}>
      <TouchableOpacity
        style={styles.ProductBoxContentContainer}
        onPress={() => {
          return detailnfoCommoditysGet(item.key);
        }}
      >
        <View style={styles.ProductBoxContainerTitleKey}>
          <Text style={styles.ProductBoxTitleKey}>{item.key.toString().toUpperCase()}</Text>
        </View>

        <View style={styles.ProductBoxContainerTitleName}>
          <Text style={styles.ProductBoxTitleName}>{item.name}</Text>
        </View>

        <View style={styles.ProductBoxContainerPriceSymbol}>
          <Text style={styles.ProductBoxTitleAmount}>{item.value}</Text>
          <Text style={styles.ProductBoxTitleSymbol}>{`/ ${info.symbol} - ${info.currency}`}</Text>
        </View>

        <View style={styles.ProductBoxContainerTitleDate}>
          <Text style={styles.ProductBoxTitleDate}>{formattedDate}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => ({
  detailnfoCommodity: state.commodity.get('detailnfoCommodity').toJS(),
});

const mapDispatchToProps = { detailnfoCommoditysGet };

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
