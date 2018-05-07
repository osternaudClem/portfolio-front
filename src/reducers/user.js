import * as types from '../datas/actionTypes';
import initialState from './initialState';

export default function(state = initialState.users, action) {
  switch (action.type) {
    case types.RETRIEVE_USERS_SUCCESS: {
      return {
        ...state,
        all: action.users.users,
      };
    }
    default:
      return state;
  }
}
