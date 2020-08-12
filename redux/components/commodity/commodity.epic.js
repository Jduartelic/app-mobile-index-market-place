import { of } from 'rxjs';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { request } from 'universal-rxjs-ajax';

import { API_URL } from '../../../utils/constants';

import {
  COMMODITYS_GET,
  commoditysGetSuccess,
  commoditysGetFailure,
  DETAIL_INFO_COMMODITYS_GET,
  detailnfoCommoditysGetSuccess,
  detailnfoCommoditysGetFailure,
} from './commodity.state';

const URL = `${API_URL}`;

//
// Get commoditys
//
export const getCommoditysEpic = (action$) =>
  action$.pipe(
    ofType(COMMODITYS_GET),
    mergeMap(() => {
      return request({
        method: 'GET',
        url: `${URL}/last`,
        headers: {
          'Content-Type': 'application/json',
        },
      }).pipe(
        map(({ response }) => {
          const responseData = { data: response };
          return commoditysGetSuccess(responseData);
        }),
        catchError((error) => of(commoditysGetFailure(error))),
      );
    }),
  );

//
// Get detail info commoditys
//
export const getDetailInfoCommoditysEpic = (action$) =>
  action$.pipe(
    ofType(DETAIL_INFO_COMMODITYS_GET),
    mergeMap((action) => {
      const { key } = action.payload;

      const body = { key };

      return request({
        method: 'POST',
        url: `${URL}/info`,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      }).pipe(
        map(({ response }) => {
          const responseData = { data: response };
          return detailnfoCommoditysGetSuccess(responseData);
        }),
        catchError((error) => of(detailnfoCommoditysGetFailure(error))),
      );
    }),
  );

export default combineEpics(getCommoditysEpic, getDetailInfoCommoditysEpic);
