import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from './styles';

const chart = (props) => {
  return (
    <View style={styles.ChartContainer}>
      <LineChart
        data={{
          labels: props.labels,
          datasets: [
            {
              data: props.dataSets,
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={Dimensions.get('window').height * 0.4}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: 'transparent',
          backgroundGradientFrom: '#326295',
          backgroundGradientTo: '#326295',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          barPercentage: 0.5,
          style: {
            // borderRadius: 16,
          },
          propsForDots: {
            r: '3.5',
            strokeWidth: '2',
            stroke: '#326295',
          },
        }}
        bezier
        style={
          {
            // flex: 2,
            //   marginVertical: 8,
            // borderRadius: 16,
          }
        }
      />
    </View>
  );
};

export default chart;
