import home from '../model/home'
import { all, fork, } from 'redux-saga/effects'

export default function* () {
  let sagas = []
  const matchFiles = require.context('../model', true, /index.js$/)
  matchFiles.keys().forEach(key => {
    const defaultModule = matchFiles(key).default;
    const { saga } = defaultModule
    sagas.push(fork(saga))
  })
  yield all(sagas)
}
