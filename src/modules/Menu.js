import React, { useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchMenu } from '../actions';

const MenuLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;
  padding: 0.5rem 0;
  padding-left: 1rem;
  display: block;
  transition: background 100ms ease-in-out;

  &:hover,
  &.active {
    background: #000000;
  }

  &.active {
    border-left: #ae160f 5px inset;
    padding-left: calc(1rem - 5px);
  }
`;

const Menu = (props) => {
  useEffect(() => {
    props.fetchMenu();
  }, []);

  return (
    <>
      <MenuLink key="home" exact to="/">
        Hjem
      </MenuLink>
      {props.menu.map((menuItem) => (
        <MenuLink key={menuItem.slug} to={`/${menuItem.slug}`}>
          {menuItem.title}
        </MenuLink>
      ))}
    </>
  );
};

const mapStateToProps = (state) => ({
  menu: state.menuReducer.menu,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMenu: () => dispatch(fetchMenu()),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(React.memo(Menu)),
);
