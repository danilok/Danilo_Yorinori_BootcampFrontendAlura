/* eslint-disable indent */
import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Text, { TextStyleVariantsMap } from '../../foundation/layout/Text';
import propToStyle from '../../../theme/utils/propToStyle';

const HeaderWrapper = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.background.light.color};
  width: 100%;
  position: sticky;
  top: 0px;
  border-top: 2px solid ${({ theme }) => theme.colors.background.dark.color};

  ${breakpointsMedia({
    md: css`
      height: 50px;
    `,
  })}
`;

HeaderWrapper.Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.background.dark.color};
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  p {
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariantsMap.headerLinkXS}
      `,
      md: css`
        ${TextStyleVariantsMap.headerLink}
        width: 200px;
      `,
    })}
  }

  ${propToStyle('width')}
`;

HeaderWrapper.Navbar = styled.nav`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;

  ${propToStyle('width')}

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
    transition: 200ms ease-in-out;
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariantsMap.headerLinkXS}
      `,
      md: css`
        ${TextStyleVariantsMap.headerLink}
      `,
    })}
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
    }
  }
`;

export default function Header({ links, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <HeaderWrapper {...props}>
      <HeaderWrapper.Logo
        width={{
          xs: '60px',
          md: '200px',
        }}
      >
        <Text variant="smallestException" tag="p">
          Danilo
        </Text>
      </HeaderWrapper.Logo>
      <HeaderWrapper.Navbar
        width={{
          xs: '175px',
          md: '264px',
        }}
      >
        {links.map((link) => (
          <li key={link.url}>
            <Text variant="headerLinkXS" tag="a" href={link.url}>
              {link.text}
            </Text>
          </li>
        ))}
      </HeaderWrapper.Navbar>
    </HeaderWrapper>
  );
}

const headerLink = PropTypes.shape({
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
});

Header.propTypes = {
  links: PropTypes.arrayOf(headerLink).isRequired,
};
