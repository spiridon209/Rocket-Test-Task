import axios from 'axios';
import { USERS_URL } from './constants';

// eslint-disable-next-line import/prefer-default-export
export const getUser = async (userId) => {
  try {
    const response = await axios.get(`${USERS_URL}/${userId}`);
    return response.data;
  } catch (err) {
    return err;
  }
};
