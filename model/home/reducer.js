import * as types from './types'

// 分离状态，一个状态对应一个reducer函数
export const homeInfo = (state = {}, action) => {
  switch (action.type) {
    case types.INFO_REQ:
      return { ...state, status: 'reqIng' };
    case types.INFO_SUC: {
      return { ...state, status: 'reqSuc' };
    }
    case types.INFO_FAIL:
      return { ...state, status: 'reqFail' };
    default:
      return state;
  }
}

// 用户信息
// export const userInfo = (state = {}, action) => {
//   switch (action.type) {
//     case types.INFO_REQ:
//       return { ...state, status: 'reqIng' };
//     case types.INFO_SUC: {
//       return { ...state, status: 'reqSuc' };
//     }
//     case types.INFO_FAIL:
//       return { ...state, status: 'reqFail' };
//     default:
//       return state;
//   }
// }
