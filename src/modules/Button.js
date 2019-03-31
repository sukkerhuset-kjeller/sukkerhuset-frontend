import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const LinkButton = styled(({ pushright, primary, ...props }) => (
  <Link {...props} />
))`
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

  ${(props) =>
    props.pushright &&
    css`
      margin-left: auto;
      margin-right: 2rem;
    `}

  ${(props) =>
    props.primary &&
    css`
      background: #078b75;
      color: #ffffff;
      margin-right: 4rem;

      &:hover {
        background: #067361;
      }
    `}
`;

export default LinkButton;
