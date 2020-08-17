import React, { Component } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProductBox from '../../Common/ProductBox';
import Loader from '../../Common/Loader';
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
    const { commoditys, commoditysGetFetching, detailnfoCommoditysGetFetching } = this.props;
    const isFetching = commoditysGetFetching || detailnfoCommoditysGetFetching;

    return (
      <SafeAreaView style={styles.HomeContainer}>
        {isFetching && <Loader />}
        <FlatList
          data={commoditys}
          renderItem={(commodity) => {
            const { route, navigation } = this.props;
            const productBoxProps = {
              commodity,
              route,
              navigation,
            };

            return <ProductBox {...productBoxProps} />;
          }}
          keyExtractor={(item) => {
            return item.key;
          }}
        />
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  commoditys: PropTypes.object,
  commoditysGet: PropTypes.func,
  commoditysGetFetching: PropTypes.bool,
  detailnfoCommoditysGetFetching: PropTypes.bool,
  route: PropTypes.object,
  navigation: PropTypes.object,
};

Home.defaultProps = {
  commoditys: {},
  commoditysGet: undefined,
  commoditysGetFetching: false,
  detailnfoCommoditysGetFetching: false,

  route: {},
  navigation: {},
};

const mapStateToProps = (state) => ({
  commoditys: state.commodity.get('commoditys').toJS(),
  commoditysGetError: state.commodity.get('commoditysGetError'),
  commoditysGetFetching: state.commodity.get('commoditysGetFetching'),
  commoditysGetFetched: state.commodity.get('commoditysGetFetched'),
  detailnfoCommoditysGetError: state.commodity.get('detailnfoCommoditysGetError'),
  detailnfoCommoditysGetFetching: state.commodity.get('detailnfoCommoditysGetFetching'),
  detailnfoCommoditysGetFetched: state.commodity.get('detailnfoCommoditysGetFetched'),
});

const mapDispatchToProps = { commoditysGet };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
