import React from 'react';
import styled from 'styled-components';
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
}) {
  return (
    <TextareaWrapper>
      <Textarea
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        rows={rows}
      />
    </TextareaWrapper>
  );
}

TextareaField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  rows: PropTypes.string,
};

TextareaField.defaultProps = {
  rows: '3',
};
