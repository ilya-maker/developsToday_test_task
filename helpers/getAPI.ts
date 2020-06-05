const API_URL = 'https://simple-blog-api.crew.red';
import axios from 'axios';

export const getPosts = async () => {
  try {
    const result = await axios.get(`${API_URL}/posts`);

    return result.data;
  } catch (e) {
    console.error(e)
  }
}