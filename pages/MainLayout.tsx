import React, { useEffect } from 'react';
import { Header } from '../Layout/Header/Header';
import { Footer } from '../Layout/Footer/Footer';
import { wrapper, getPostsFromAPI } from '../store';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Head from 'next/head';

const Container = styled.div`
  min-height: calc(100vh - 4rem - 5rem);
`;

interface Props {
  children: JSX.Element;
  title?: string;
}

const MainLayout = ({ children, title }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFromAPI());
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="text/html;charset=UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
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
