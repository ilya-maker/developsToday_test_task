import React from 'react';
import MainLayout from '../MainLayout';
import styled from 'styled-components';
import { useState } from 'react';
import { sendPost } from '../../helpers/getAPI';
import Router from 'next/router';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin: 1rem auto;
`;

const Input = styled.input`
  outline: 0;
  padding: 0.5rem;
  width: 17rem;
  border: 1 px solid lightgrey;
`;

const Textarea = styled.textarea`
  width: 17rem;
  resize: none;
  height: 5rem;
  padding: 0.5rem;
  outline: 0;
  transition: all 0.3s;
  border: 1 px solid lightgrey;
`;

const Button = styled.button`
  display: block;
  width: 18rem;
  height: 2rem;
  margin: 0 auto;
  border: 0;
  outline: 0;
  background-color: #fafafa;
  border-radius: 15rem;
  border: 1px solid #858287;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #f3f2f1;
  }
`;

const ErrorP = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #8c0a0a;
`;

const ErrorSpan = styled.span`
  font-weight: bold;
`;

const newPost = (): JSX.Element => {
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (postTitle.trim() 
      && postTitle.length >= 3
      && postBody.trim() 
      && postBody.length >= 3) {
      sendPost(postTitle, postBody)
      .then(() => Router.push('/'));

      setPostTitle('');
      setPostBody('');
      setErrorMessage('');

      return;
    }

    if (!postTitle.trim() && !postBody.trim()) {
      setErrorMessage('title and body');
    } else if (!postTitle.trim()) {
      setErrorMessage('title');
    } else {
      setErrorMessage('body');
    }
  };

  return (
    <MainLayout title="Create post">
      <Form onSubmit={handleSubmit}>
        <Label>
          <Input
            type="text"
            placeholder="Write a title of new post"
            value={postTitle}
            onChange={(e) => {
              setPostTitle(e.target.value);
              setErrorMessage('');
            }}
          />
        </Label>
        <Label>
          <Textarea
            placeholder="Write a body of new post"
            value={postBody}
            onChange={(e) => {
              setPostBody(e.target.value);
              setErrorMessage('');
            }}
          ></Textarea>
        </Label>
        <Button type="submit" onClick={handleSubmit}>
          Send
        </Button>
        {errorMessage && (
          <ErrorP>
            Plese, write correctly <ErrorSpan>{errorMessage}</ErrorSpan> of new post
          </ErrorP>
        )}
      </Form>
    </MainLayout>
  );
};

export default newPost;
