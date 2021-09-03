import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import get from 'lodash/get';

const Anchor = styled.a`
  color: inherit;
  text-decoration: none;
  ${({ theme, color }) => (color
    ? `color: ${get(theme, `colors.${color}.color`)}`
    : 'color: inherit;')};
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <Anchor
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </Anchor>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
