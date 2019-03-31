import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

import { builder } from '../index';

import LinkButton from './Button';

const StyledHeader = styled.header`
  background: #ffffff;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  padding: 0 1rem;
  z-index: 2;
  position: relative;
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 900px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderLogo = styled.img`
  height: 5rem;
`;

const HeaderLinkButton = styled(LinkButton)`
  @media (max-width: 700px) {
    display: none;
  }
`;

const MainNavButton = styled((props) => (
  <a {...props}>
    <FaBars />
  </a>
))`
  font-size: 1.5rem;
  color: #000000;
  display: flex;
  @media (max-width: 700px) {
    margin-left: auto;
  }
`;

const Header = (props) => {
  const onClickMenu = (e) => {
    e.preventDefault();
    document.querySelector('.Menu').classList.toggle('open');
  };

  return (
    <StyledHeader>
      <HeaderContent>
        <Link to={'/'}>
          {props.settings ? (
            <HeaderLogo
              src={builder.image(props.settings.logo).url()}
              alt={props.settings.pageName}
            />
          ) : (
            'Sukkerhuset'
          )}
        </Link>
        <HeaderLinkButton
          pushright
          to={'/frivillig'}
          className="button push-right">
          Bli frivillig
        </HeaderLinkButton>
        <HeaderLinkButton primary to={'/utleie'} className="button button--cta">
          Leie lokalet?
        </HeaderLinkButton>
        <MainNavButton href="#" onClick={(e) => onClickMenu(e)} />
      </HeaderContent>
    </StyledHeader>
  );
};

const mapStateToProps = (state) => ({
  settings: state.settingsReducer.settings,
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(React.memo(Header)),
);
