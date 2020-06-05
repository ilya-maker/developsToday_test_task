import { SET_POSTS } from './actions';
import { RootState } from './index';

export const setPosts = (posts: RootState) => ({ type: SET_POSTS, posts });