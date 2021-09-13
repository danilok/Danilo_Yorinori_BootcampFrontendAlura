import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import propToStyle from '../../../theme/utils/propToStyle';
import { TextStyleVariantsMap } from '../../foundation/Text';

const SectionTitleWrapper = styled.section`
  color: ${({ theme }) => theme.colors.primary.main.color};
  background-color: ${({ theme }) => theme.colors.background.section.color};

  ${TextStyleVariantsMap.sectionTitle}
  text-transform: uppercase;

  ${propToStyle('textAlign')}
  ${propToStyle('paddingTop')}
  ${propToStyle('paddingBottom')}
`;

export default function SectionTitle({ children }) {
  return (
    <SectionTitleWrapper
      textAlign="center"
      paddingTop={{
        xs: '32px',
        md: '64px',
      }}
      paddingBottom={{
        xs: '32px',
        md: '64px',
      }}
    >
      {children}
    </SectionTitleWrapper>
  );
}

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
