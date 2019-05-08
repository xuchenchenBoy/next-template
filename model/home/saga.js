import * as types from './types'
import { fork, take, put, call, takeEvery, } from 'redux-saga/effects'
import { getReq } from '../../utils/request'

function *getInfo(store) {
  while(1) {
    yield take(types.INFO_REQ)
    try {
      const res = yield call(getReq,
        {
          url: 'http://rap2api.taobao.org/app/mock/10621/integral/user/statRank' 
        }
      )
      yield put({
        type: types.INFO_SUC, 
        payload: res
      })
    } catch (err) {
      yield put({
        type: types.INFO_FAIL
      })
    }
  }
}

export default function* () {
  yield fork(getInfo)
}