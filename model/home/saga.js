import * as types from './types'
import { fork, take, put, call, takeEvery, } from 'redux-saga/effects'

function *getInfo(store) {
  while(1) {
    yield take(types.HOME_INFO_REQ)
    yield put({
      type: types.HOME_INFO_SUC, 
      payload: res.data.status 
    })
  }
}

export default function* () {
  yield fork(getInfo)
}