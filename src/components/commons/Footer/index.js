/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Text from '../../foundation/Text';

const FooterWrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.light.color};
  z-index: ${({ theme }) => theme.zIndex.footer};
`;

FooterWrapper.Icon = styled.nav`
  margin: 0 20px;
  padding: 18px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 224px;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.background.dark.color};

  a {
    text-align: center;
    display: block;
    text-decoration: none;
  }
`;

export default function Footer({ links, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <FooterWrapper.Icon>
        {links.map((link) => (
          <li key={link.key}>
            <Text
              as={motion.a}
              whileHover={{
                scale: 1.5,
                transition: {
                  duration: 0.5,
                  ease: 'easeInOut',
                },
              }}
              variant="smallestException"
              tag="a"
              href={link.url}
            >
              <img
                src={link.icon}
                width="32px"
                height="32px"
                alt={link.alt}
              />
            </Text>
          </li>
        ))}
      </FooterWrapper.Icon>
    </FooterWrapper>
  );
}

const footerLink = PropTypes.shape({
  key: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

Footer.propTypes = {
  links: PropTypes.arrayOf(footerLink).isRequired,
};
