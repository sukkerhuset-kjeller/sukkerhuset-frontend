import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { builder } from '../index';

const Logo = styled.img`
  max-width: 100%;
`;

const LogoLink = styled(Link)`
  display: block;
  padding: 1rem;
  color: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  text-decoration: none;

  ${Logo} {
    color: var(--black);
    filter: invert(1);

    & + span {
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--white);
      text-transform: uppercase;
      margin: 0.5rem 0;
      text-align: center;
      font-size: 0.75rem;
    }
  }
`;

const Header = (props) => {
  return (
    <LogoLink to="/">
      {props.settings ? (
        <>
          <Logo
            src={builder.image(props.settings.logo).url()}
            alt={props.settings.pageName}
          />
          <span>Kjeller &amp; scene</span>
        </>
      ) : (
        'Sukkerhuset'
      )}
    </LogoLink>
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
