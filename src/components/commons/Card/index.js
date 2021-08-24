import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import { motion } from 'framer-motion';
import CardHighlight from '../CardHightlight';
import CardDefault from '../CardDefault';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const CardWrapper = styled.li`
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.background.dark.color};
  ${breakpointsMedia({
    xs: css`
      width: 290px;
      height: 249px;
      margin: 16px 0;
    `,
    md: css`
      width: 288px;
      height: 510px;
    `,
  })}
  flex-basis: auto;

  ${propToStyle('width')}

  ${({ isHighlighted }) => {
    if (isHighlighted) {
      return breakpointsMedia({
        xs: css`
          order: -1;
        `,
        md: css`
          order: 4;
          height: 320px;
        `,
      });
    }
    return css`
      order: initial;
    `;
  }}
`;

export default function Card({ card, ...props }) {
  const isHighlighted = card.highlight === true;
  return (
    <CardWrapper
      as={motion.li}
      whileHover={{ scale: 1.05 }}
      isHighlighted={isHighlighted}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {isHighlighted && <CardHighlight card={card} />}
      {!isHighlighted && <CardDefault card={card} />}
    </CardWrapper>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
    repo: PropTypes.string,
    highlight: PropTypes.bool,
  }).isRequired,
};
