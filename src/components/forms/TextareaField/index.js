/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

const TextareaWrapper = styled.div`
  margin-bottom: 17px;
  margin-top: 12px;
`;

const Textarea = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.background.dark.color};

  ${({ theme, isFieldInvalid }) => isFieldInvalid && css`
    border-color: ${theme.colors.danger.main.color};
    & + span {
      color: ${theme.colors.danger.main.color};
      font-size: 11px;
    }
  `}

  &:disabled {
    cursor: not-allowed;
    opacity: .5;
  }
`;

Textarea.defaultProps = {
  tag: 'textarea',
  variant: 'paragraph1',
};

export default function TextareaField({
  placeholder,
  name,
  onChange,
  value,
  rows,
  error,
  isTouched,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;
  return (
    <TextareaWrapper>
      <Textarea
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        rows={rows}
        isFieldInvalid={isFieldInvalid}
        {...props}
      />

      {isFieldInvalid && (
        <Text
          variant="smallestException"
          color="danger.main"
          role="alert"
        >
          {error}
        </Text>
      )}
    </TextareaWrapper>
  );
}

TextareaField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  rows: PropTypes.string,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
};

TextareaField.defaultProps = {
  rows: '3',
  error: '',
  isTouched: false,
};
