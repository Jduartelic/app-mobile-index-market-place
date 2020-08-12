import { combineReducers } from 'redux';

import CommodityReducer from './components/commodity/commodity.state';

const reducers = {
  commodity: CommodityReducer,
};

export default combineReducers(reducers);
