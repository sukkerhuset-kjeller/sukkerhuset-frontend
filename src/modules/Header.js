import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import styled, { css } from 'styled-components'
import { FaBars } from 'react-icons/fa'

import { builder } from '../index'

const StyledHeader = styled.header`
    background: #ffffff;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;
    padding: 0 1rem;
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

const Button = styled(Link)`
    text-decoration: none;
    padding: 0 1rem;
    height: 2rem;
    line-height: 2rem;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 300;
    background: #666666;
    color: #ffffff;
    -webkit-transition: background 100ms ease-in-out;
    transition: background 100ms ease-in-out;

    &:hover {
        background: #595959;
    }

    ${props => props.pushright && css`
        margin-left: auto;
        margin-right: 2rem;
    `}

    ${props => props.primary && css`
        background: #078B75;
        color: #ffffff;

        &:hover {
            background: #067361;
        }
    `}
`;

const Header = props => (
    <StyledHeader>
        <HeaderContent>
            <Link to={'/'}>
                {props.settings ? (
                    <HeaderLogo src={builder.image(props.settings.logo).url()} alt={props.settings.pageName} />
                ) : (
                    'Sukkerhuset'
                )}
            </Link>
            <Button pushright={true ? 1 : 0} to={'/frivillig'} className="button push-right">Bli frivillig</Button>
            <Button primary={true ? 1 : 0} to={'/utleie'} className="button button--cta">Leie lokalet?</Button>
            <a href="#" className="main-nav-toggle"><FaBars /></a>
        </HeaderContent>
    </StyledHeader>
)

const mapStateToProps = state => ({
  settings: state.settingsReducer.settings
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)