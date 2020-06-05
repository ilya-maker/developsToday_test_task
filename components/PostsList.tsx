import Link from 'next/link';
import styled from 'styled-components';

const Li = styled.li`
  box-sizing: border-box;
  border: 1px solid grey;
  padding: 1rem;
  margin: 1rem 5rem;
  list-style-type: none;
  border-radius: 1rem;
  text-align: center;
  cursor: pointer;
`;

const PostTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.5rem;
`;

const PostLink = styled.a`
  text-decoration: none;
  color: black;
`;

interface Props {
  posts: Post[];
}

const PostsList: React.FC<Props> = ({ posts }) => {
  return (
    <ul>
      {posts.map(post => (
        <Link href="/posts/[id]" as={`/posts/${post.id}`} key={post.id}>
          <Li>
            <PostLink>
              <PostTitle>
                {post.title}
              </PostTitle>
              {post.body}
            </PostLink>
          </Li>
        </Link>
      ))}
    </ul>
  )
}

export default PostsList;