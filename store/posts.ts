import { SET_POSTS } from './actions';
import { Action } from 'redux';

type SetPosts = Action<typeof SET_POSTS> & { posts: Post[] };
const initPostState: Post[] = [];

const reducer = (posts = initPostState, action: SetPosts): Post[] => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;

    default:
      return posts;
  }
};

export default reducer;
