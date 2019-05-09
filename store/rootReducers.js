import { combineReducers } from 'redux'

let reducers = {}
const matchFiles = require.context('../model', true, /index.js$/)
matchFiles.keys().forEach(key => {
  const { name, reducer } = matchFiles(key).default;
  reducers[name] = reducer
})
const rootReducers = combineReducers(reducers)
const initialReducers = {}

export { initialReducers };

export default rootReducers;