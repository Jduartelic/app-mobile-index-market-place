import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import { InfoCurrencys } from '../../../utils/constants';
import styles from './styles';

const ProductBox = (commodity) => {
  const { item, index } = commodity;
  const info = InfoCurrencys[item.unit];
  const date = new Date(item.date * 1000);
  const formattedDate = moment(date).format('DD/MM/YYYY');

  return (
    <View style={styles.ProductBoxContainer(index)}>
      <View style={styles.ProductBoxContentContainer}>
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
      </View>
    </View>
  );
};

export default ProductBox;
