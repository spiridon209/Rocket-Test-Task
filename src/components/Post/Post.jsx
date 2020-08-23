import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getUser } from '../../apiRequests/usersRequests';
import { PostTitle, PostAuthor } from './styles';

const Post = ({ title, userId }) => {
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getUser(userId).then((user) => setAuthor(() => user.username));
  }, [userId]);

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostAuthor>Author: {author}</PostAuthor>
    </>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};

export default Post;
