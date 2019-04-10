import React from 'react';
import styled from 'styled-components';

const MailLink = ({ link, ...rest }) => styled(
  <a href={link} {...rest}>
    {link.replace('mailto:', '')}
  </a>,
)`
  color: #078b75;
  text-decoration: none;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;

  &:hover {
    text-decoration: underline;
  }
`;

export default MailLink;
