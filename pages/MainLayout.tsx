import React from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { wrapper, getPostsFromAPI } from '../store';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Container = styled.div`
  min-height: calc(100vh - 4rem - 3rem);
`;

interface Props {
  children: JSX.Element;
}

const MainLayout = ({ children }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFromAPI());
  }, []);

  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
      <style jsx global>{`
        html {
          font-size: 16px;
          font-family: 'Gill Sans', sans-serif;
        }

        html,
        body,
        h1,
        p,
        ul,
        li {
          margin: 0;
          padding: 0;
        }
        p {
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default wrapper.withRedux(MainLayout) as Function;
