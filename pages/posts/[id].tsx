import React, { useState } from 'react';
import MainLayout from '../MainLayout';
import styled from 'styled-components';
import { NextPageContext } from 'next';
import DeletePost from '../../components/DeletePost';
import { sendComment } from '../../helpers/api';
import Router from 'next/router';

const PostWrapp = styled.div`
  width: 80vw;
  box-shadow: 3px -2px 17px -1px rgba(158,153,153,1);
  box-sizing: border-box;
  padding: 1rem;
  margin 20px auto 0;
  position: relative;
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

const CommentParagraph = styled.p`
  margin-top: 1rem;
`;

const Li = styled.li`
  list-style-type: none;
`;

const CommentsInput = styled.input`
  padding: 0.5rem;
  margin: 0.5rem auto 0;
  font-size: 1rem;
  width: 17rem;
`;

const CommentP = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const ButtonComment = styled.button`
  margin-left: 1rem;
  padding: 0.5rem;
  outline: 0;
  border: 1px solid #d4d4d4;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
  }
`;

const ErrorMessage = styled.p`
  color: #8c0a0a;
`;

interface Props {
  postData: Post;
}

const PostPage = ({ postData }: Props): JSX.Element => {
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const handleSendComment = () => {
    if (comment.trim() && comment.length > 3) {
      sendComment(postData.id, comment);
      setComment('');
      Router.reload();
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <MainLayout title={postData.title}>
      <PostWrapp>
        <DeletePost id={postData.id} path="/trash.svg" />
        <p>
          <SpanTitle>Title:</SpanTitle> {postData.title}
        </p>
        <p>
          <SpanTitle>Post description:</SpanTitle> {postData.body}
        </p>
        <label>
          <CommentP>Write a comment:</CommentP>
          <CommentsInput
            type="text"
            placeholder="Write..."
            value={comment}
            onChange={(e) => {
              setComment(e.target.value);
              setErrorMessage(false);
            }}
          />
        </label>
        <label>
          <ButtonComment type="button" onClick={handleSendComment}>
            Send
          </ButtonComment>
        </label>
        {errorMessage && (
          <ErrorMessage>Please, write correctly comment</ErrorMessage>
        )}
        {postData.comments.length > 0 && (
          <>
            <CommentParagraph>
              <SpanTitle>Comments:</SpanTitle>
            </CommentParagraph>
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
};

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
