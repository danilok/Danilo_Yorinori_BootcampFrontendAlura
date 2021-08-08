/* eslint-disable indent */
import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';
import Text, { TextStyleVariantsMap } from '../../foundation/layout/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const CoverWrapper = styled.div`
  position: sticky;
  width: 100vw;
  height: 100vh;
  background-image: url('https://picsum.photos/id/974/1920/1080');
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.cover.main.color};

  h1, h2 {
    margin: 0;
    text-shadow: 1px 1px 2px black, 0 0 1em #787ba2, 0 0 0.2em #9393ab
  }

  h1 {
    ${breakpointsMedia({
      md: css`
        ${TextStyleVariantsMap.coverH1}
      `,
    })}
  }
  h2 {
    ${breakpointsMedia({
      md: css`
        ${TextStyleVariantsMap.coverH2}
      `,
    })}
  }

  .scroll-down {
    height: 50px;
    width: 30px;
    border: 2px solid white;
    position: absolute;
    right: 5%;
    bottom: 20px;
    border-radius: 50px;
  }
  .scroll-down::before,
  .scroll-down::after {
    content: "";
    position: absolute;
    top: 20%;
    right: 5%;
    height: 10px;
    width: 10px;
    transform: translate(-50%, -100%) rotate(45deg);
    border: 2px solid white;
    border-top: transparent;
    border-left: transparent;
    animation: scroll-down 1s ease-in-out infinite;
  }
  .scroll-down::before {
    top: 30%;
    animation-delay: 0.3s;
  }

  @keyframes scroll-down {
    0% {
      /* top:20%; */
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    100% {
      top: 90%;
      opacity: 0;
    }
  }
`;

export default function Cover({ user }) {
  return (
    <>
      <CoverWrapper>
        <Text
          variant="coverH1XS"
          tag="h1"
        >
          {user}
        </Text>
        <Text
          variant="coverH2XS"
          tag="h2"
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          Portfolio
        </Text>
        <div className="scroll-down" />
      </CoverWrapper>
    </>
  );
}

Cover.propTypes = {
  user: PropTypes.string.isRequired,
};
