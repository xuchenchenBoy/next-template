import { all, fork, } from 'redux-saga/effects'

export default function* () {
  let sagas = []
  const matchFiles = require.context('../model', true, /index.js$/)
  matchFiles.keys().forEach(key => {
    const { saga } = matchFiles(key).default;
    sagas.push(fork(saga))
  })
  yield all(sagas)
}
