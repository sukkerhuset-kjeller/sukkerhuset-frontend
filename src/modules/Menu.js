import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import styled from 'styled-components'

import { fetchMenu } from '../actions';

const MenuWrapper = styled.nav`
    position: absolute;
    background: rgba(240, 240, 240, 1);
    z-index: 1;
    width: 100%;
    max-width: 10rem;
    padding: .5rem 1.5rem;
    top: 100px;
    right: 0;
    bottom: 0;
    transform: translateX(100%);
    transition: transform 300ms ease-in-out;

    &.open {
        transform: translateX(0);
    }
`;

const MenuLink = styled(NavLink)`
    text-decoration: none;
    text-transform: uppercase;
    color: #000000;
    padding: .5rem 0;
    display: block;
    position: relative;
    transition: color 100ms ease-in-out;

    &:hover, &.active {
        color: #078B75;
    }
`;

const Menu = props => {
    useEffect(() => {
        props.fetchMenu()
    }, [])

    return (
        <MenuWrapper className="Menu">
            <MenuLink key="home" exact to="/">Hjem</MenuLink>
            {props.menu.map(menuItem => <MenuLink key={menuItem.slug} to={`/${menuItem.slug}`}>{menuItem.title}</MenuLink>)}
        </MenuWrapper>
    )
}

const mapStateToProps = state => ({
    menu: state.menuReducer.menu
})

const mapDispatchToProps = dispatch => ({
    fetchMenu: () => dispatch(fetchMenu())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Menu))