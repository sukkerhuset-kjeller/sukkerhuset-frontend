import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { builder } from '../index';

import { fetchToken, fetchPosts, fetchEvents } from '../actions';

import ContentArea from '../modules/ContentArea';
import ALink from '../modules/Link';
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
          <div>
            <HeroLink to={'/frivillig'}>Bli frivillig</HeroLink>
            <HeroLink to={'/utleie'}>Lei lokalet</HeroLink>
          </div>
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
          <ALink href="https://www.facebook.com/Sukkerhuset" target="_blank">
            Se mer på facebook
          </ALink>
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
