import axios from 'axios';
import { POSTS_URL } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const getPosts = async () => {
  try {
    const response = await axios.get(POSTS_URL);
    return response.data;
  } catch (err) {
    return err;
  }
};
