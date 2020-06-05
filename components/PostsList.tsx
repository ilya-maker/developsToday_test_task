import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Li = styled.li`
  box-sizing: border-box;
  box-shadow: 3px -2px 17px -1px rgba(158,153,153,1);
  padding: 1rem;
  max-width: 70vw;
  margin: 1rem auto;
  list-style-type: none;
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
`;

const PostTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
  text-shadow: 9px -7px 24px rgba(150, 150, 150, 1);
`;

const PostLink = styled.a`
  text-decoration: none;
  color: black;
`;

interface Props {
  posts: Post[];
}

const PostsList = ({ posts }: Props): JSX.Element => {
  return (
    <ul>
      {posts.map(post => (
        <Link href="/posts/[id]" as={`/posts/${post.id}`} key={post.id}>
          <Li>
            <PostLink>
              <PostTitle>
                {post.title}
              </PostTitle>
              {post.body}
            </PostLink>
          </Li>
        </Link>
      ))}
    </ul>
  )
}

export default PostsList;