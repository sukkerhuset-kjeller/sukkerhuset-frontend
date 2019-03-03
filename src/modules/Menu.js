import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'
import { 
    FaUsers, 
    FaHome, 
    FaQuestionCircle,
    FaUserTie 
} from 'react-icons/fa'

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

const Menu = props => (
    <MenuWrapper className="Menu">
        <MenuLink to={'/frivillig'}><FaUsers /> Frivillig</MenuLink>
        <MenuLink to={'/utleie'}><FaHome /> Utleie</MenuLink>
        <MenuLink to={'/quiz'}><FaQuestionCircle /> Quiz</MenuLink>
        <MenuLink to={'/styret'}><FaUserTie /> Styret</MenuLink>
    </MenuWrapper>
)

export default Menu