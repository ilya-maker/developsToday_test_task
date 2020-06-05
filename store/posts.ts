import { SET_POSTS } from './actions';
import { AnyAction } from 'redux';

const reducer = (posts = [] as Post[], action: AnyAction) => {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;

    default:
      return posts;
  };
};

export default reducer;
