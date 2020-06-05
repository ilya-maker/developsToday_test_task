import MainLayout from './MainLayout';
import { useSelector } from 'react-redux';
import { wrapper, getPosts } from '../store';
import PostsList from '../components/PostsList';

const AllPosts = () => {
  const posts: Post[] = useSelector(getPosts);

  return (
    <MainLayout>
      <PostsList posts={posts} />
    </MainLayout>
  );
};

export default wrapper.withRedux(AllPosts);