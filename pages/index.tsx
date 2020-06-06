import React from 'react';
import MainLayout from './MainLayout';
import { useSelector } from 'react-redux';
import { wrapper, newestPosts } from '../store';
import PostsList from '../components/PostsList';

const Home = () => {
  const posts = useSelector(newestPosts);

  return (
      <MainLayout title="New posts">
        <PostsList posts={posts} />
      </MainLayout>
  );
};

export default wrapper.withRedux(Home);
