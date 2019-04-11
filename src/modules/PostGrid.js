import React, { useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import imagesLoaded from 'imagesloaded';
import Post from './Post';

const PostGrid = (props) => {
  const containerRef = useRef();
  const { posts, location } = props;
  const rowHeight = 20;
  const gap = 16;

  const GridContainer = styled.div`
    padding: 1rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: ${gap}px;
    grid-auto-rows: ${rowHeight}px;
  `;

  const calculateContentHeight = (item) => {
    return [...item.children].reduce(
      (acc, child) => (acc += child.getBoundingClientRect().height),
      0,
    );
  };

  const resizeGridItem = (item) => {
    const rowSpan = Math.ceil(
      (calculateContentHeight(item) + gap + gap) / (rowHeight + gap),
    );
    item.style.gridRowEnd = `span ${rowSpan}`;
  };

  const resizeAllGridItems = () => {
    const items = containerRef.current.querySelectorAll('.post');
    items.forEach((item) => {
      resizeGridItem(item);
      imagesLoaded(item, () => resizeGridItem(item));
    });
  };

  useEffect(() => {
    window.onload = resizeAllGridItems();
    window.addEventListener('resize', () => {
      resizeAllGridItems();
    });
  }, [posts, location]);

  return (
    <GridContainer ref={containerRef}>
      {posts.length > 0
        ? posts.map((post) => (
            <Post className="post" key={post.id} data={post} />
          ))
        : 'Ingen innlegg tilgjengelig.'}
    </GridContainer>
  );
};

export default withRouter(PostGrid);
