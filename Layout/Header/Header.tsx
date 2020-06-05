import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';

const HeaderBlock = styled.header`
  height: 2.5rem;
  border-bottom: 1px solid #f2ecec;
`;

const Ul = styled.ul`
  display: flex;
  text-align: center;
  height: 2.5rem;
  justify-content: space-evenly;
  line-height: 2.5rem;
  list-style-type: none;
`;

const Li = styled.li`
  display: inline;
`;

const DefaultLink = styled.a`
  text-decoration: none;
  color: #646464;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    color: #575050;
  }
`;

const ActiveLink = styled.a`
  text-decoration: none;
  color: #282323;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.5s;
`;

export const Header = (): JSX.Element => {
  const router = useRouter();

  return (
    <>
      <HeaderBlock>
        <nav>
          <Ul>
            <Li>
              <Link href="/">
                {router.pathname === '/' ? <ActiveLink>New posts</ActiveLink> : <DefaultLink>New posts</DefaultLink>}
              </Link>
            </Li>
            <Li>
              <Link href="/all_posts">
                {router.pathname === '/all_posts' ? (
                  <ActiveLink>All posts</ActiveLink>
                ) : (
                  <DefaultLink>All posts</DefaultLink>
                )}
              </Link>
            </Li>
            <Li>
              <Link href="/posts/new">
                {router.pathname === '/posts/new' ? (
                  <ActiveLink>Create post</ActiveLink>
                ) : (
                  <DefaultLink>Create posts</DefaultLink>
                )}
              </Link>
            </Li>
          </Ul>
        </nav>
      </HeaderBlock>
    </>
  );
};
