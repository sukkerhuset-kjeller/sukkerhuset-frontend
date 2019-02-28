import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

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

const Footer = (props) => {
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
                    <img src="https://sukkerhuset.no/wp-content/themes/sukkerhuset/assets/images/sit-logo.svg" alt="SiT logo" />
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
)(Footer))