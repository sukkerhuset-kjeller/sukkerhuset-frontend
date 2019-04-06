import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { builder } from '../index';

const FooterWrapper = styled.div`
  margin-top: auto;
  padding: 1rem;
`;

const FooterInfo = styled.div`
  color: #ffffff;
  margin-top: 1rem;
`;

const FooterTitle = styled.p`
  text-transform: uppercase;
  margin: 0;
  font-size: 1rem;
  font-weight: 300;
`;

const FooterContent = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;

const SponsorImage = styled.img`
  height: 1.5rem;
`;

const Footer = (props) => {
  return (
    <FooterWrapper>
      <FooterInfo>
        {props.settings && (
          <>
            {props.settings.pageName && (
              <FooterTitle>{props.settings.pageName}</FooterTitle>
            )}
            {props.settings.address && (
              <FooterContent>{props.settings.address}</FooterContent>
            )}
          </>
        )}
      </FooterInfo>
      <FooterInfo>
        <FooterTitle>Åpningstider</FooterTitle>
        {props.settings &&
          props.settings.openingHours &&
          props.settings.openingHours.map((hour) => (
            <FooterContent key={hour.day}>
              <span>{hour.day}</span> {hour.openingTime}{' '}
              {hour.closingTime && `- ${hour.closingTime}`}
            </FooterContent>
          ))}
      </FooterInfo>
      <FooterInfo>
        <FooterTitle>Sponsor</FooterTitle>
        {props.settings.sponsors &&
          props.settings.sponsors.map((sponsor) => (
            <SponsorImage
              key={sponsor.name}
              src={builder.image(sponsor.logo).url()}
              alt={sponsor.name}
            />
          ))}
      </FooterInfo>
    </FooterWrapper>
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
