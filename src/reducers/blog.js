import * as types from '../datas/actionTypes';
import initialState from './initialState';

export default function(state = initialState.blog, action) {
  switch (action.type) {
    case types.RETRIEVE_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.posts.posts,
      };
    }
    case types.RETRIEVE_PAGES_SUCCESS: {
      return {
        ...state,
        pages: action.pages.posts,
      };
    }
    default:
      return state;
  }
}
