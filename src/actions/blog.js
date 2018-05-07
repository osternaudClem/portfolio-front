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

// Get all posts
export function retrievePostsSuccess(res) {
  return {
    type: types.RETRIEVE_POSTS_SUCCESS,
    posts: res,
  };
}

export function retrievePosts() {
  return function(dispatch) {
    Client.posts(
      {
        include: 'tags',
        formats: ['plaintext', 'html', 'mobiledoc'],
      },
      (error, posts) => {
        if (error) {
          return console.log('Get posts', error);
        }
        dispatch(retrievePostsSuccess(posts));
      }
    );
  };
}

// Get all pages
export function retrievePagesSuccess(res) {
  return {
    type: types.RETRIEVE_PAGES_SUCCESS,
    pages: res,
  };
}

export function retrievePages() {
  return function(dispatch) {
    Client.posts(
      {
        filter: 'page:true',
        formats: ['plaintext', 'html', 'mobiledoc'],
      },
      (error, pages) => {
        if (error) {
          return console.log('Get pages', error);
        }
        dispatch(retrievePagesSuccess(pages));
      }
    );
  };
}
