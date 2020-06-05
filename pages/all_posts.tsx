import React from 'react';
import MainLayout from './MainLayout';
import { useSelector } from 'react-redux';
import { wrapper, allPosts } from '../store';
import PostsList from '../components/PostsList';

const AllPosts = () => {
  const posts: Post[] = useSelector(allPosts);

  return (
    <MainLayout>
      <PostsList posts={posts} />
    </MainLayout>
  );
};

export default wrapper.withRedux(AllPosts);