import React, { useState } from 'react';
import MainLayout from '../MainLayout';
import styled from 'styled-components';
import { NextPageContext } from 'next';
import { changePost } from '../../helpers/getAPI';
import Router from 'next/router';

interface Props {
  postData: Post;
}

const Container = styled.div`
  max-width: 25rem;
  box-shadow: 3px -2px 17px -1px rgba(158, 153, 153, 1);
  padding: 2rem;
  margin: 2rem auto;
  border-radius: 25px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 90%;
  height: 2rem;
  font-size: 1.5rem;
  border-radius: 25px;
  border: 1px solid grey;
  outline: 0;
  padding: 1rem;
`;

const Span = styled.span`
  font-weight: bold;
  font-size: 1rem;
  padding: 0 0 1rem 1rem;
`;

const Label = styled.label`
  margin-bottom: 1rem;
`;

const Textarea = styled.textarea`
  width: 90%;
  height: 2rem;
  font-size: 1.5rem;
  border-radius: 25px;
  border: 1px solid grey;
  outline: 0;
  padding: 1rem;
  resize: none;
  height: 15rem;
`;

const ErrorP = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #8c0a0a;
`;

const ErrorSpan = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  width: 90%;
  margin: 0 auto;
  display: block;
  padding: 0.5rem;
  cursor: pointer;
  border: 1px solid #d4d4d4;
  border-radius: 4rem;
  font-size: 1rem;
  outline: 0;
  transition: all 0.3s;

  &:hover {
    background-color: #fff;
  }
`;

const ChangePost = ({ postData }: Props): JSX.Element => {
  const [title, setTitle] = useState(postData.title);
  const [body, setBody] = useState(postData.body);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      title.trim() &&
      title.length >= 3 &&
      body.trim() &&
      body.length >= 3
    ) {
      changePost(title, body, postData.id)
        .then(() => Router.push('/'));

      setTitle('');
      setBody('');
      setErrorMessage('');

      return;
    }

    if (!title.trim() && !body.trim()) {
      setErrorMessage('title and body');
    } else if (!title.trim()) {
      setErrorMessage('title');
    } else {
      setErrorMessage('body');
    }
  };

  return (
    <MainLayout title="Change post">
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Span>Title:</Span>
            <Input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setErrorMessage('');
              }}
            />
          </Label>
          <Label>
            <Span>Body:</Span>
            <Textarea
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                setErrorMessage('');
              }}
            />
          </Label>
          <Button disabled={!!errorMessage}>Change post</Button>
        </Form>
        {errorMessage && (
          <ErrorP>
            Plese, write correctly{' '}
            <ErrorSpan>{errorMessage}</ErrorSpan> of new post
          </ErrorP>
        )}
      </Container>
    </MainLayout>
  );
};

interface Context extends NextPageContext {
  id: number;
}

ChangePost.getInitialProps = async (context: Context) => {
  const { id } = context.query;
  const API_URL = 'https://simple-blog-api.crew.red/posts/';
  const preparedData = await fetch(`${API_URL}${id}?_embed=comments`);
  const json = await preparedData.json();

  return { postData: json };
};

export default ChangePost;
