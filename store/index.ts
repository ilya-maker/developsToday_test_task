import { createStore, applyMiddleware, combineReducers } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import * as api from '../helpers/getAPI';
import { createSelector } from 'reselect'
import postReducer from './posts';
import { Dispatch } from 'react';
import { setPosts } from './actionTypes';


const rootReducer = combineReducers({
  posts: postReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export const getPosts = (state: RootState) => state.posts;

export const getPostsFromAPI = () => {
  return (dispatch: Dispatch<any>) => {
    api.getPosts()
      .then(posts => {
        dispatch(setPosts(posts));
      });
  }
}

export const newestPosts = createSelector(
  getPosts,

  (posts: Post[]) => {
    return posts
      .sort((a: Post, b: Post) => b.id - a.id)
      .slice(0, 10);
  }
)

const makeStore: MakeStore<RootState> = (context: Context) => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const wrapper = createWrapper<RootState>(makeStore, { debug: true });