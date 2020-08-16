import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductBox from '../../Common/ProductBox';
import { commoditysGet } from '../../../redux/components/commodity/commodity.state';

import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { props } = this;
    props.commoditysGet();
  }

  render() {
    const { commoditys } = this.props;

    return (
      <SafeAreaView style={styles.HomeContainer}>
        <FlatList
          data={commoditys}
          renderItem={(commodity) => {
            return <ProductBox {...commodity} />;
          }}
          keyExtractor={(item) => item.key}
        />
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  commoditys: PropTypes.object,
  commoditysGet: PropTypes.func,
};

Home.defaultProps = {
  commoditys: {},
  commoditysGet: undefined,
};

const mapStateToProps = (state) => ({
  commoditys: state.commodity.get('commoditys').toJS(),
  commoditysGetError: state.commodity.get('commoditysGetError'),
  commoditysGetFetching: state.commodity.get('commoditysGetFetching'),
  commoditysGetFetched: state.commodity.get('commoditysGetFetched'),
});

const mapDispatchToProps = { commoditysGet };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
