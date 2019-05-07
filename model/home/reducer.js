import * as types from './types'

const INIT_STATE = {
  
}

export const homeInfo = (state = INIT_STATE, action) => {
  switch (action.type) {
    case types.HOME_INFO_REQ:
      return { ...state, status: 'reqIng' };
    case types.HOME_INFO_SUC: {
      return { ...state, status: 'reqSuc' };
    }
    case types.HOME_INFO_FAIL:
    return { ...state, status: 'reqFail' };
    default:
      return state;
  }
}