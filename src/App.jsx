import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import PostsList from './components/PostsList/PostsList';
import { getPosts } from './apiRequests/postsRequests';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  padding: 10px;
  margin: auto;
`;

const FilterField = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export default () => {
  const [inputValue, setInputValue] = useState('');
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getPosts()
      .then((array) => setPosts(() => array))
      .catch((err) => setError(() => err.message));
  }, []);

  const inputChangeHandler = (evt) => {
    evt.preventDefault();
    const { value } = evt.target;
    setInputValue(() => value);
  };

  const resetButtonHandler = (evt) => {
    evt.preventDefault();
    setInputValue(() => '');
  };

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <AppWrapper>
      <h1>Тестовое задание</h1>
      <FilterField>
        <Input inputValue={inputValue} inputChangeHandler={inputChangeHandler} descriptionText="Поиск по заголовку:" />
        <Button type="reset" name="Очистить" handler={resetButtonHandler} />
      </FilterField>
      <PostsList posts={posts} inputValue={inputValue} />
    </AppWrapper>
  );
};
