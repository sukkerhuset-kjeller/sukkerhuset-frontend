import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { builder } from '../index'

const StyledFooter = styled.footer`
    background: #666666;
    color: #f5f5f5;
    padding: 1rem 0;

    p {
        font-weight: 300;
        margin: 0;
        font-size: 0.875rem;

        & > span {
            margin: 0;
            margin-right: .5rem;
            font-size: 1rem;
            font-weight: normal;
            line-height: 1.2;
        }
    }

    a {
        color: #f5f5f5;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const FooterRow = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding: 1rem 0;
`;

const FooterInfo = styled.div`
    width: calc(50% - 1rem);
    margin-right: 1rem;
    text-align: right;

    &:last-child {
        margin-right: 0;
        margin-left: 1rem;
        text-align: left;
    }
`;

const FooterTitle = styled.h2`
    text-transform: uppercase;
    margin: 0;
    font-size: 1.3rem;
    font-weight: 300;
`;

const FooterLink = styled(Link)`
    font-size: .875rem;
    font-weight: 300;
    && {
        text-decoration: underline;
        cursor: pointer;

        &:hover {
            text-decoration: none;
        }
    }
`;

const Footer = props => {
    return (
        <StyledFooter>
            <FooterRow>
                <FooterInfo>
                    { props.settings && (
                        <>
                            { props.settings.pageName &&
                                <FooterTitle>{props.settings.pageName}</FooterTitle>
                            }
                            { props.settings.address && 
                                <p>{props.settings.address}</p>
                            }
                            <FooterLink to='privacy'>Privacy Policy</FooterLink>
                        </>
                    )}
                </FooterInfo>
                <FooterInfo>
                    <FooterTitle>Åpningstider</FooterTitle>
                    {
                        props.settings && 
                        props.settings.openingHours && 
                        props.settings.openingHours.map(hour => (
                            <p key={hour.day}>
                                <span>{hour.day}</span>
                                {hour.openingTime} {hour.closingTime && `- ${hour.closingTime}`}
                            </p>
                        ))
                    }
                </FooterInfo>
            </FooterRow>
            <FooterRow>
                <div>
                    <FooterTitle>Sponsor</FooterTitle>
                    {
                        props.settings.sponsors && props.settings.sponsors.map(sponsor => (
                            <img src={builder.image(sponsor.logo).url()} alt={sponsor.name} />
                        ))
                    }
                </div>
            </FooterRow>
        </StyledFooter>
    )
}

const mapStateToProps = state => ({
    settings: state.settingsReducer.settings
})

const mapDispatchToProps = dispatch => ({

})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(Footer)))