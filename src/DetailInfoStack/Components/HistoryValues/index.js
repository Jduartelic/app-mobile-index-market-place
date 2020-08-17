import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { InfoCurrencys } from '../../../../utils/constants';
import styles from './styles';

const HistoryValues = (props) => {
  const { historyValue } = props;
  const { item } = historyValue;
  const { date, price, selectedCommodity } = item;
  const info = InfoCurrencys[selectedCommodity.unit];

  return (
    <View
      style={{
        ...styles.HistoryValuesContainer,
      }}
    >
      <View style={styles.HistoryValuesNameTextContainer}>
        <Text style={styles.HistoryValuesNameText}>{selectedCommodity.name}</Text>
      </View>

      <View style={styles.HistoryValueInfoContainer}>
        <View style={styles.HistoryValuesAmountContainer}>
          <Text style={styles.HistoryValuesAmountText}>
            {info.symbol}
            {price}
            <Text style={styles.HistoryValuesCurrencyText}>{`/${info.currency}`}</Text>
          </Text>
        </View>

        <View style={styles.HistoryValueDateContainer}>
          <Text style={styles.HistoryValuesDateText}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

HistoryValues.propTypes = {
  historyValue: PropTypes.shape({
    item: PropTypes.shape({
      date: PropTypes.number,
      price: PropTypes.string,
      selectedCommodity: PropTypes.shape({
        unit: PropTypes.string,
        name: PropTypes.string,
      }),
    }),
  }),
};

HistoryValues.defaultProps = {
  historyValue: { item: { date: '', price: 0, selectedCommodity: { unit: '', name: '' } } },
};

export default HistoryValues;
