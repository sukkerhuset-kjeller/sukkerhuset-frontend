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

  ${Logo} {
    padding-bottom: 1rem;
    border-bottom: 1px solid #000000;
    color: #000000;
    filter: invert(1);
  }
`;

const Header = (props) => {
  return (
    <LogoLink to={'/'}>
      {props.settings ? (
        <Logo
          src={builder.image(props.settings.logo).url()}
          alt={props.settings.pageName}
        />
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
