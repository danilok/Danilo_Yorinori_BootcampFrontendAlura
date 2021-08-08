import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import CardImage from '../CardImage';
import CardTitle from '../CardTitle';
import CardText from '../CardText';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../foundation/layout/Text';

const CardHighlightSpan = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.colors.primary.main.color};
  font-size: 18px;
  padding: 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.background.dark.color};
  background-color: white;
  z-index: 1;

  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.highlightXS}
      width: 147px;
      top: 4px;
      left: 4px;
    `,
    md: css`
      ${TextStyleVariantsMap.highlight}
      width: 228px;
      top: 10px;
      left: 10px;
    `,
  })}
`;

const CardHighlightWrapper = styled.div`
  position: relative;
  display: flex;
  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
    `,
    md: css`
      flex-direction: row;
    `,
  })}
`;

const CardHighlightInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${breakpointsMedia({
    md: css`
      padding-left: 32px;
      width: 33.333333%;
    `,
  })}
`;

export default function CardHighlight({ card }) {
  return (
    <CardHighlightWrapper>
      <CardHighlightSpan>
        Destaque
      </CardHighlightSpan>
      <CardImage
        src={card.img}
        url={card.url}
        isHighlighted
      />
      <CardHighlightInfoWrapper>
        <CardTitle
          repo={card.repo}
          isHighlighted
        >
          {card.title}
        </CardTitle>
        <CardText isHighlighted>
          {card.text}
        </CardText>
      </CardHighlightInfoWrapper>
    </CardHighlightWrapper>
  );
}

CardHighlight.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    url: PropTypes.string,
    repo: PropTypes.string,
    highlight: PropTypes.bool,
  }).isRequired,
};
