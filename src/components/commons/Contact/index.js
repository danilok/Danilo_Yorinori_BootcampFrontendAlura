/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled, { css } from 'styled-components';
import { PropTypes } from 'prop-types';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import Text from '../../foundation/Text';

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${breakpointsMedia({
    xs: css`
      padding-bottom: 130px;
    `,
  })}

  p {
    margin: 0;
  }
`;

const Button = styled.button`
  border: 0px;
  cursor: pointer;
  margin: 10px 0;
  background-color: inherit;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default function Contact({ onClick, ...props }) {
  return (
    <ContactWrapper>
      <Text
        as="p"
        variant="contact"
        color="primary.main"
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        Entre em contato
      </Text>
      <Button
        id="contactBtn"
        type="button"
        onClick={() => onClick()}
      >
        <img alt="Entrar em contato" src="images/icons/add_button.svg" />
      </Button>
    </ContactWrapper>
  );
}

Contact.propTypes = {
  onClick: PropTypes.func.isRequired,
};
