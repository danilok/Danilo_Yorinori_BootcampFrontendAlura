/* eslint-disable indent */
import { React } from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Text from '../../foundation/Text';
import Link from '../Link';

const CardTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  ${breakpointsMedia({
    xs: css`
      height: 65px;
    `,
    md: css`
      height: 114px;
    `,
  })}

  ${({ isHighlighted }) => {
    if (isHighlighted) {
      return breakpointsMedia({
        xs: css`
          justify-content: center;
        `,
        md: css`
          justify-content: flex-start;
        `,
      });
    }
    return css`
      justify-content: center;
    `;
  }}

  p {
    margin: 0;
    text-decoration: none;
  }
`;

export default function CardTitle({ repo, children, ...props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CardTitleWrapper {...props}>
      <Link href={repo}>
        <Text
          as="p"
          variant="title"
        >
          {children}
        </Text>
      </Link>
    </CardTitleWrapper>
  );
}

CardTitle.propTypes = {
  repo: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
