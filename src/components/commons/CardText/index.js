import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Box from '../../foundation/layout/Box';

const CardTextWrapper = styled.div`
  ${breakpointsMedia({
    xs: css`
      display: none;
    `,
    md: css`
      display: block;
    `,
  })}

  ${({ isHighlighted }) => {
    if (isHighlighted) {
      return breakpointsMedia({
        md: css`
          height: 185px;
          overflow: hidden;
          width: 250px;
          p {
            margin: 0;
          }
        `,
      });
    }
    return '';
  }}
`;

export default function CardText({ children, isHighlighted }) {
  return (
    <CardTextWrapper isHighlighted={isHighlighted}>
      {isHighlighted && children && (
        <Box
          dangerouslySetInnerHTML={{
            __html: children,
          }}
        />
      )}
    </CardTextWrapper>
  );
}

CardText.propTypes = {
  children: PropTypes.string.isRequired,
  isHighlighted: PropTypes.bool,
};

CardText.defaultProps = {
  isHighlighted: false,
};
