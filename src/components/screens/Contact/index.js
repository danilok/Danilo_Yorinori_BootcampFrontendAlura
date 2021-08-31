import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';

const ContactWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

export default function ContactScreen() {
  return (
    <ContactWrapper>
      <Text
        variant="coverH2"
        tag="h1"
        margin="0"
      >
        Em construção
      </Text>
    </ContactWrapper>
  );
}
