import React from 'react';
import styled from 'styled-components';
import Text from '../../foundation/Text';

const AboutWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

export default function AboutScreen() {
  return (
    <AboutWrapper>
      <Text
        variant="coverH2"
        tag="h1"
        margin="0 0 0 0"
      >
        Em construção
      </Text>
    </AboutWrapper>
  );
}
