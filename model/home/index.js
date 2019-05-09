import * as reducer from './reducer'
import { combineReducers  } from 'redux'
import saga from './saga'

export default {
  name: 'home', // 注册模块名，类似 namespace，自动注册
  reducer: combineReducers({ ...reducer }),
  saga
}