const API_URL = 'https://simple-blog-api.crew.red';
import axios from 'axios';

export const getPosts = async () => {
  try {
    const result = await axios.get(`${API_URL}/posts`);

    return result.data;
  } catch (error) {
    console.error(error)
  }
}

export const sendPost = async (postTitle: string, postBody: string) => {
  try {
    axios.delete
    return axios.post(`${API_URL}/posts`, { 
      title: postTitle,
      body: postBody,
     })
     .then(() => getPosts());
  } catch (error) {
    throw `Ooooops, sorry: ${error}`;
  };
};