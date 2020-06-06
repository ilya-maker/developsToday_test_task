import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import DeletePost from '../components/DeletePost';

const Li = styled.li`
  box-sizing: border-box;
  box-shadow: 3px -2px 17px -1px rgba(158, 153, 153, 1);
  padding: 1rem;
  max-width: 70vw;
  margin: 1rem auto;
  list-style-type: none;
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const PostTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
  text-shadow: 9px -7px 24px rgba(150, 150, 150, 1);
`;

const EditContainer = styled.div`
  position: absolute;
  right: 2.5rem;
  transition: all 0.5s;
  bottom: 1px;

  &:hover {
    transform: scale(1.1);
  }
`;

const PostLink = styled.a`
  text-decoration: none;
  color: black;
`;

const EditImg = styled.img`
  width: 2rem;
`;

const PostBody = styled.p`
  padding: 1rem;
`;

interface Props {
  posts: Post[];
}

const PostsList = ({ posts }: Props): JSX.Element => {
  return (
    <ul>
      {posts.map((post) => (
        <Li key={post.id}>
          <DeletePost id={post.id} path="trash.svg" />
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <PostLink>
              <PostTitle>{post.title}</PostTitle>
              <PostBody>{post.body}</PostBody>
            </PostLink>
          </Link>
          <EditContainer>
            <Link href="/change/[id]" as={`/change/${post.id}`}>
              <EditImg src="edit.svg" alt="edit" />
            </Link>
          </EditContainer>
        </Li>
      ))}
    </ul>
  );
};

export default PostsList;
