import React from 'react';
import styled from 'styled-components';

const PostArticle = styled.article`
  width: 100%;
  background: #ffffff;
  box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);
  font-size: 0.875rem;
  display: block;
  color: #333333;
  position: relative;
  text-decoration: none;
  transition: box-shadow 100ms ease-in-out;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  & > img {
    width: 100%;
    height: auto;
  }

  & > p {
    margin: 8px;
    line-height: 1.3;
    color: #666666;
    font-weight: 300;
  }
`;

const Post = (props) => {
  const { full_picture, message } = props.data;

  return (
    <PostArticle {...props}>
      <img src={full_picture} alt="" />
      <p>{message}</p>
    </PostArticle>
  );
};

export default Post;
