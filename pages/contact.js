import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.main.color};
  width: 100vw;
  height: 100vh;
  text-align: center;

  p {
    font-size: 40px;
  }
`;

export default function Contact() {
  return (
    <ContactWrapper>
      <p>Em construção</p>
    </ContactWrapper>
  );
}
