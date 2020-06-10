import React from 'react';
import styled from 'styled-components';

interface Props {
  comments: Comment[];
}

const SpanTitle = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const Li = styled.li`
  list-style-type: none;
`;

const CommentParagraph = styled.p`
  margin-top: 1rem;
`;

const CommentDescr = styled.span`
  font-weight: bold;
  font-size: 1rem;
  padding-left: 1rem;
`;

const Comments = ({ comments }: Props): JSX.Element => (
  <>
    <CommentParagraph>
      <SpanTitle>Comments:</SpanTitle>
    </CommentParagraph>
    <ul>
      {comments.map((comment) => (
        <Li key={comment.postId}>
          <p>
            <CommentDescr>-</CommentDescr> {comment.body}
          </p>
        </Li>
      ))}
    </ul>
  </>
);

export default Comments;
