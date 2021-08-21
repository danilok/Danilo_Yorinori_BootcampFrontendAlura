/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';

const CloseButtonWrapper = styled.div`
  position: relative;
  cursor: pointer;
  width: 32px;
  height: 32px;
  transform: rotate(45deg);

  ${breakpointsMedia({
    xs: css`
      top: -40px;
      left: 258px;
    `,
    md: css`
      top: 28px;
      left: 93%;
    `,
  })}

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default function CloseButton({ onClose, resetForm }) {
  return (
    <CloseButtonWrapper
      onClick={() => {
        resetForm();
        onClose();
      }}
    >
      <img src="/images/icons/add_button.svg" alt="Fechar" />
    </CloseButtonWrapper>
  );
}

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};
