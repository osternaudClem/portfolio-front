import * as types from '../datas/actionTypes';
import { api } from '../config';
import Ghost from '../services/ghost-sdk';

function createClient(options) {
  return new Ghost(options);
}

// Init Ghost api
const Client = createClient({
  endpoint: api.ghost.url,
  clientId: api.ghost.clientId,
  clientSecret: api.ghost.clientSecret,
});

// Get all users
export function retrieveUsersSuccess(res) {
  return {
    type: types.RETRIEVE_USERS_SUCCESS,
    users: res,
  };
}

export function retrieveUsers() {
  return function(dispatch) {
    Client.users(
      {},
      (error, users) => {
        if (error) {
          return console.log('Get users', error);
        }
        console.log('users', users);
        dispatch(retrieveUsersSuccess(users));
      }
    );
  };
}
