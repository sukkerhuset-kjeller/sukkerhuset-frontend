import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { builder } from '../index';

const StyledFooter = styled.footer`
  background: #666666;
  color: #f5f5f5;
  padding: 1rem 1rem;

  p {
    font-weight: 300;
    margin: 0;
    font-size: 0.875rem;

    & > span {
      margin: 0;
      margin-right: 0.5rem;
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

  @media (max-width: 550px) {
    &:first-child {
      flex-flow: column nowrap;
      align-items: center;
    }
  }
`;

const FooterInfo = styled.div`
  width: calc(50% - 1rem);
  text-align: center;
  &:first-child {
    margin-bottom: 1rem;
  }

  @media (min-width: 550px) {
    text-align: left;
    margin-left: 1rem;
    &:first-child {
      margin-right: 1rem;
      margin-left: 0;
      text-align: right;
    }
  }
`;

const FooterTitle = styled.h2`
  text-transform: uppercase;
  margin: 0;
  font-size: 1.3rem;
  font-weight: 300;
`;

const FooterLink = styled(Link)`
  font-size: 0.875rem;
  font-weight: 300;
  && {
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`;

const Footer = (props) => {
  return (
    <StyledFooter>
      <FooterRow>
        <FooterInfo>
          {props.settings && (
            <>
              {props.settings.pageName && (
                <FooterTitle>{props.settings.pageName}</FooterTitle>
              )}
              {props.settings.address && <p>{props.settings.address}</p>}
              <FooterLink to="privacy">Privacy Policy</FooterLink>
            </>
          )}
        </FooterInfo>
        <FooterInfo>
          <FooterTitle>Åpningstider</FooterTitle>
          {props.settings &&
            props.settings.openingHours &&
            props.settings.openingHours.map((hour) => (
              <p key={hour.day}>
                <span>{hour.day}</span>
                {hour.openingTime} {hour.closingTime && `- ${hour.closingTime}`}
              </p>
            ))}
        </FooterInfo>
      </FooterRow>
      <FooterRow>
        <div>
          <FooterTitle>Sponsor</FooterTitle>
          {props.settings.sponsors &&
            props.settings.sponsors.map((sponsor) => (
              <img
                key={sponsor.name}
                src={builder.image(sponsor.logo).url()}
                alt={sponsor.name}
              />
            ))}
        </div>
      </FooterRow>
    </StyledFooter>
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
  )(React.memo(Footer)),
);
