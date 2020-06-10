import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  body: string;
}

const SpanTitle = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const PostBody = ({ title, body }: Props): JSX.Element => (
  <>
    <p>
      <SpanTitle>Title:</SpanTitle> {title}
    </p>
    <p>
      <SpanTitle>Post description:</SpanTitle> {body}
    </p>
  </>
);

export default PostBody;
