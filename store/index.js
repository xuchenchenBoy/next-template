import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducers, { initialReducers } from './rootReducers'
import rootSagas from './rootSagas'

const configureStore = (initState = initialReducers) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducers, initState, applyMiddleware(sagaMiddleware))
  store.sagaTask = sagaMiddleware.run(rootSagas)
  return store;
}

export default configureStore;