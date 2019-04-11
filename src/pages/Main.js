import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { builder } from '../index';

import { fetchToken, fetchPosts, fetchEvents } from '../store/actions';

import ContentArea from '../modules/ContentArea';
import PostGrid from '../modules/PostGrid';

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
  color: var(--white);
  font-weight: 600;
  text-transform: uppercase;
`;

const HeroLink = styled(Link)`
  color: var(--white);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 1rem;
  border: 2px solid var(--white);
  margin: 0 0.5rem;
  transition: all 100ms ease-in-out;

  &:hover {
    background: var(--white);
    color: var(--red);
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
          <div>
            <HeroLink to={'/frivillig'}>Bli frivillig</HeroLink>
            <HeroLink to={'/utleie'}>Lei lokalet</HeroLink>
          </div>
        </Hero>
      )}
      <ContentArea>
        <h1>Dette skjer på sukkerhuset</h1>
        <PostGrid posts={props.facebook.posts} />
      </ContentArea>
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
