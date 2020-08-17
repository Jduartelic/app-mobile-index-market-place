import React from 'react';
import { SafeAreaView, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { detailnfoCommoditysGet } from '../../../redux/components/commodity/commodity.state';
import { InfoCurrencys } from '../../../utils/constants';
import Chart from '../../Common/Charts';
import HistoryValues from '../Components/HistoryValues';
import styles from './styles';

const DetailInfoCommodity = (props) => {
  const historyValuesArr = [];
  const { detailnfoCommodity, route, commoditys } = props;
  const { keyCommodity } = route.params;
  const { labelsChart, prices } = detailnfoCommodity.chartData;
  const labelsCharts = labelsChart;
  const pricesData = prices;
  const info = InfoCurrencys[detailnfoCommodity.unit];
  const historyValues = detailnfoCommodity.values;
  const detailnfoCommodityValuesLength = Object.keys(historyValues).length;
  const infoCommodity = {
    price: Object.values(historyValues)[detailnfoCommodityValuesLength - 1],
    date: Object.keys(historyValues)[detailnfoCommodityValuesLength - 1],
  };

  const selectedCommodity = Object.values(commoditys).find((item) => {
    return item.key === keyCommodity;
  });

  const chartData = {
    dataSets: pricesData,
    labels: labelsCharts,
  };

  Object.keys(historyValues).map((item) => {
    return historyValuesArr.push({
      date: item,
      price: historyValues[item],
      selectedCommodity,
    });
  });

  return (
    <SafeAreaView style={styles.DetailInfoContainer}>
      <View style={styles.DetailInfoHeaderContainer}>
        <View style={styles.DetailInfoKeyContainer}>
          <Text style={styles.DetailInfoKey}>{detailnfoCommodity.key.toString().toUpperCase()}</Text>
        </View>
        <View style={styles.DetailInfoSymbolContainer}>
          <Text style={styles.DetailInfoSymbol}>
            {info.symbol}
            {infoCommodity.price}
            <Text style={styles.DetailInfoCurrency}>{`/${info.currency}`}</Text>
          </Text>
        </View>

        <View style={styles.DetailInfoDateContainer}>
          <Text style={styles.DetailInfoDate}>{infoCommodity.date}</Text>
        </View>
      </View>

      <FlatList
        data={historyValuesArr.reverse()}
        renderItem={(historyValue) => {
          const propsHistoryValues = {
            historyValue,
          };

          return (
            <>
              {historyValue.index === 0 && (
                <View style={styles.DetailInfoChartContainer}>
                  <Chart {...chartData} />
                </View>
              )}
              <View style={styles.DetailInfoHistoryContainer}>
                <HistoryValues {...propsHistoryValues} />
              </View>
            </>
          );
        }}
        initialNumToRender={50}
        maxToRenderPerBatch={50}
        updateCellsBatchingPeriod={10}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
      />
    </SafeAreaView>
  );
};

DetailInfoCommodity.propTypes = {
  commoditys: PropTypes.object,

  detailnfoCommodity: PropTypes.shape({
    chartData: PropTypes.shape({
      labelsChart: PropTypes.array,
      prices: PropTypes.array,
      dataSetLabels: PropTypes.array,
    }),
    key: PropTypes.string,
    unit: PropTypes.string,
    values: PropTypes.string,
  }),

  route: PropTypes.shape({
    params: PropTypes.shape({
      keyCommodity: PropTypes.string,
    }),
  }),
};

DetailInfoCommodity.defaultProps = {
  commoditys: {},

  detailnfoCommodity: PropTypes.shape({
    chartData: {
      labelsChart: [],
      prices: [],
      dataSetLabels: [],
    },
    key: '',
    unit: '',
    values: '',
  }),

  route: {
    params: {
      keyCommodity: '',
    },
  },
};

const mapStateToProps = (state) => ({
  commoditys: state.commodity.get('commoditys').toJS(),
  detailnfoCommodity: state.commodity.get('detailnfoCommodity').toJS(),
  detailnfoCommoditysGetError: state.commodity.get('detailnfoCommoditysGetError'),
  detailnfoCommoditysGetFetching: state.commodity.get('detailnfoCommoditysGetFetching'),
  detailnfoCommoditysGetFetched: state.commodity.get('detailnfoCommoditysGetFetched'),
});

const mapDispatchToProps = { detailnfoCommoditysGet };

export default connect(mapStateToProps, mapDispatchToProps)(DetailInfoCommodity);
