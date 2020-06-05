import MainLayout from '../MainLayout';
import styled from 'styled-components';
import { NextPageContext } from 'next';

const PostWrapp = styled.div`
  width: 80vw;
  border: 1px solid grey;
  box-sizing: border-box;
  padding: 1rem;
  margin 20px auto 0;
`;

const SpanTitle = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
`;

const CommentDescr = styled.span`
  font-weight: bold;
  font-size: 1rem;
  padding-left: 1rem;
`;

const Li = styled.li`
  list-style-type: none;
`;

const PostPage = props => {
  const currentPost: Post = props.postData;

  return (
    <MainLayout>
      <PostWrapp>
        <p><SpanTitle>Title:</SpanTitle> {currentPost.title}</p>
        <p><SpanTitle>Post description:</SpanTitle> {currentPost.body}</p>
        {currentPost.comments.length > 0 && (
          <>
            <p><SpanTitle>Comments:</SpanTitle></p>
            <ul>
              {currentPost.comments.map(comment => (
                <Li>
                  <p><CommentDescr>-</CommentDescr> {comment.body}</p>
                </Li>
              ))}
            </ul>
          </>
        )}
      </PostWrapp>
    </MainLayout>
  )
}

interface Context extends NextPageContext {
  id: number;
}

PostPage.getInitialProps = async (context: Context) => {
  const { id } = context.query;
  const API_URL = 'https://simple-blog-api.crew.red/posts/';
  const preparedData = await fetch(`${API_URL}${id}?_embed=comments`);
  const json = await preparedData.json();

  return { postData: json }
}

export default PostPage;