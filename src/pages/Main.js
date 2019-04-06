import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { builder } from '../index';

import { fetchToken, fetchPosts, fetchEvents } from '../actions';

import ContentArea from '../modules/ContentArea';
import Link from '../modules/Link';
import Post from '../modules/Post';

const Hero = styled.div`
  background-size: cover;
  background-position: center center;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-end;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  //filter: grayscale(100%) brightness(40%) sepia(100%) hue-rotate(-50deg) saturate(600%) contrast(0.9);
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
`;

const FlexContentArea = styled(ContentArea)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 2rem;

  & > div > div {
    display: flex;
    flex-flow: row wrap;
  }
`;

const Main = (props) => {
  useEffect(() => {
    props.fetchToken();
  }, []);
  useEffect(() => {
    if (props.facebook.token) {
      props.fetchPosts(props.facebook.token);
      props.fetchEvents(props.facebook.token);
    }
  }, [props.facebook.token]);

  return (
    <>
      {props.settings && props.settings.frontpageImage && (
        <Hero
          style={{
            backgroundImage: `url(${builder
              .image(props.settings.frontpageImage)
              .url()})`,
            backgroundPosition: `${props.settings.frontpageImage.hotspot.x *
              100}% ${props.settings.frontpageImage.hotspot.y * 100}%`,
          }}>
          <div>Quiz</div>
          <div>Konsert</div>
          <div>Karaoke</div>
        </Hero>
      )}
      <FlexContentArea>
        <div>
          <h1>Dette skjer på sukkerhuset</h1>
          <div>
            {props.facebook.posts.length > 0
              ? props.facebook.posts.map((post) => (
                  <Post key={post.id} data={post} />
                ))
              : 'Ingen innlegg tilgjengelig.'}
          </div>
          <Link href="https://www.facebook.com/Sukkerhuset" target="_blank">
            Se mer på facebook
          </Link>
        </div>
      </FlexContentArea>
    </>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settingsReducer.settings,
  facebook: state.facebookReducer,
});

const mapDispatchToProps = (dispatch) => ({
  fetchToken: () => dispatch(fetchToken()),
  fetchPosts: (token) => dispatch(fetchPosts(token)),
  fetchEvents: (token) => dispatch(fetchEvents(token)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(React.memo(Main)),
);
