import * as types from './types'

const INIT_STATE = {
  
}

export const homeInfo = (state = INIT_STATE, action) => {
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