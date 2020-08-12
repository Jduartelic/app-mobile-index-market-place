import { combineEpics } from 'redux-observable';

import CommodityEpics from './components/commodity/commodity.epic';

export const rootEpic = combineEpics(CommodityEpics);
