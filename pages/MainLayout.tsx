import { Header } from "../Layout/Header/Header"
import { Footer } from "../Layout/Footer/Footer"
import { wrapper, getPostsFromAPI } from '../store';
import styled, { ThemeProvider } from 'styled-components';
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Container = styled.div`
    min-height: calc(100vh - 4rem - 3rem);
`;

const theme = {};

const MainLayout = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFromAPI());
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          {props.children}
        </Container>
        <Footer />
      </ThemeProvider>
      <style jsx global>{`
        html {
          font-size: 16px;
          font-family: "Gill Sans", sans-serif;
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