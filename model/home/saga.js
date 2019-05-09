import * as types from './types'
import { fork, take, put, call, } from 'redux-saga/effects'
import { getHomeInfo } from '@services/home'

function *getInfo() {
  while(1) {
    yield take(types.INFO_REQ)
    try {
      const res = yield call(getHomeInfo)
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