import axios, { AxiosRequestConfig } from 'axios';
const API_URL = 'https://simple-blog-api.crew.red';

type RequestConfigModern = AxiosRequestConfig & {
  title?: string;
  body?: string;
  postId?: number;
  redirect?: 'follow';
};

export const getPosts = async () => {
  const requestOptions: RequestConfigModern = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const result = await axios.get(`${API_URL}/posts`, requestOptions);

    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export const sendPost = async (
  postTitle: string,
  postBody: string,
): Promise<Post[]> => {
  const requestOptions: RequestConfigModern = {
    method: 'GET',
    redirect: 'follow',
    title: postTitle,
    body: postBody,
  };

  try {
    return axios
      .post(`${API_URL}/posts`, requestOptions)
      .then(() => getPosts());
  } catch (error) {
    throw `Ooooops, sorry: ${error}`;
  }
};

export const changePost = async (
  postTitle: string,
  postBody: string,
  id: number,
): Promise<Post[]> => {
  const requestOptions: RequestConfigModern = {
    method: 'PUT',
    redirect: 'follow',
    title: postTitle,
    body: postBody,
  };

  try {
    return axios
      .put(`${API_URL}/posts/${id}`, requestOptions)
      .then(() => getPosts());
  } catch (error) {
    throw `Ooooops, sorry: ${error}`;
  }
};

export const deletePost = async (id: number) => {
  const requestOptions: RequestConfigModern = {
    method: 'DELETE',
    redirect: 'follow',
  };

  try {
    return axios
      .delete(`${API_URL}/posts/${id}`, requestOptions)
      .then(() => getPosts());
  } catch (error) {
    throw `Ooooops, sorry: ${error}`;
  }
};

export const sendComment = async (
  postId: number,
  postBody: string,
) => {
  const requestOptions: RequestConfigModern = {
    method: 'POST',
    redirect: 'follow',
    postId,
    body: postBody,
  };

  try {
    return axios
      .post(`${API_URL}/comments`, requestOptions)
      .then(() => getPosts());
  } catch (error) {
    throw `Ooooops, sorry: ${error}`;
  }
};
