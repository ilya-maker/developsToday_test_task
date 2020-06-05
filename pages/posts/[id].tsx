import React from 'react';
import MainLayout from '../MainLayout';
import styled from 'styled-components';
import { NextPageContext } from 'next';
const PostWrapp = styled.div`
  width: 80vw;
  box-shadow: 3px -2px 17px -1px rgba(158,153,153,1);
  box-sizing: border-box;
  padding: 1rem;
  margin 20px auto 0;
`;

const SpanTitle = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const CommentDescr = styled.span`
  font-weight: bold;
  font-size: 1rem;
  padding-left: 1rem;
`;

const Li = styled.li`
  list-style-type: none;
`;

interface Props {
  postData: Post;
}

const PostPage = ({ postData }: Props): JSX.Element => (
  <MainLayout>
    <PostWrapp>
      <p>
        <SpanTitle>Title:</SpanTitle> {postData.title}
      </p>
      <p>
        <SpanTitle>Post description:</SpanTitle> {postData.body}
      </p>
      {postData.comments.length > 0 && (
        <>
          <p>
            <SpanTitle>Comments:</SpanTitle>
          </p>
          <ul>
            {postData.comments.map((comment) => (
              <Li key={comment.postId}>
                <p>
                  <CommentDescr>-</CommentDescr> {comment.body}
                </p>
              </Li>
            ))}
          </ul>
        </>
      )}
    </PostWrapp>
  </MainLayout>
);

interface Context extends NextPageContext {
  id: number;
}

PostPage.getInitialProps = async (context: Context) => {
  const { id } = context.query;
  const API_URL = 'https://simple-blog-api.crew.red/posts/';
  const preparedData = await fetch(`${API_URL}${id}?_embed=comments`);
  const json = await preparedData.json();

  return { postData: json };
};

export default PostPage;
