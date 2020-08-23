import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

import { StyledListItem, StyledPostsList } from './styles';

const PostsList = ({ posts, inputValue }) => {
  return (
    <StyledPostsList>
      {inputValue
        ? posts
            .filter((post) => post.title.includes(inputValue))
            .map((filteredPost) => (
              <StyledListItem key={filteredPost.id}>
                <Post title={filteredPost.title} userId={filteredPost.userId} />
              </StyledListItem>
            ))
        : posts.map((post) => (
            <StyledListItem key={post.id}>
              <Post title={post.title} userId={post.userId} />
            </StyledListItem>
          ))}
    </StyledPostsList>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  inputValue: PropTypes.string.isRequired,
};

export default PostsList;
