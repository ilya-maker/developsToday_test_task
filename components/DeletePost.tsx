import React from 'react';
import styled from 'styled-components';
import { deletePost } from '../helpers/api';
import Router from 'next/router';

const DeletePostLabel = styled.label`
  background-color: lightred;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 0.5rem;
  right: 2.5rem;
  cursor: pointer;
  transition: all 0.5s;
  z-index: 2;
  &:hover {
    transform: scale(1.1);
  }
`;

const TrashImg = styled.img`
  width: 2rem;
`;

interface Props {
  id: number;
  path: string;
}

const DeletePost = ({ id, path }: Props): JSX.Element => {

  const handleDelete = () => {
    deletePost(id).then(() => Router.push('/'));
  };

  return (
    <DeletePostLabel onClick={handleDelete}>
      <TrashImg src={path} alt="delete" />
    </DeletePostLabel>
  );
};

export default DeletePost;
