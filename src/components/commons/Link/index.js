import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary.main.color};
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
