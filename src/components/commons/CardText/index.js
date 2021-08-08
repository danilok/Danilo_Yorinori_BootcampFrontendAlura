import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import Text from '../../foundation/layout/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

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

export default function CardText({ children, isHighlighted, ...props }) {
  return (
    <CardTextWrapper isHighlighted={isHighlighted}>
      <Text
        as="p"
        variant="paragraph1"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children.length > 250 ? `${children.substring(0, 250)}...` : children}
      </Text>
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
