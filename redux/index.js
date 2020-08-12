import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import Immutable from 'immutable';
import reducer from './reducers';
import { rootEpic } from './epics';
import { ENV } from '../utils/constants';

export default (initialState) => {
  const isProd = ENV === 'production';
  const epicMiddleware = createEpicMiddleware();
  const middleWares = [epicMiddleware];
  const isClient = typeof window !== 'undefined';
  let store = null;

  if (!isProd && isClient) {
    const logger = createLogger({
      collapsed: true,
      stateTransformer: (state) => {
        const values = {};
        const keys = Object.keys(state);
        for (let i = 0; i < keys.length; i++) {
          const key = keys[i];
          const value = state[key];

          values[key] = Immutable.Map.isMap(value) ? value.toJS() : value;
        }

        return values;
      },
    });
    middleWares.push(logger);
  }

  const reduxMiddleware = applyMiddleware(...middleWares);

  store = createStore(reducer, Immutable.fromJS(initialState), reduxMiddleware);

  epicMiddleware.run(rootEpic);

  return store;
};
