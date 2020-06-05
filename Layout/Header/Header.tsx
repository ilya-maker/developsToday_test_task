import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';

const HeaderBlock = styled.header`
    height: 2.5rem;
    border-bottom: 1px solid #F2ECEC;
  `;

const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    height: 2.5rem;
    line-height: 2.5rem;
    list-style-type: none;
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

export const Header = () => {
  const router = useRouter();

  return (
    <>
      <HeaderBlock>
        <nav>
          <Ul>
            <li>
              <Link href="/">
                {router.pathname === '/' ? (
                  <ActiveLink>New posts</ActiveLink>
                ) : (
                    <DefaultLink>New posts</DefaultLink>
                  )}
              </Link>
            </li>
            <li>
              <Link href="/all_posts">
                {router.pathname === '/all_posts' ? (
                  <ActiveLink>All posts</ActiveLink>
                ) : (
                    <DefaultLink>All posts</DefaultLink>
                  )}
              </Link>
            </li>
          </Ul>
        </nav>
      </HeaderBlock>
    </>
  );
};
