import React from 'react';
import SectionTitle from '../../commons/SectionTitle';
import Text from '../../foundation/Text';
import { FormContent } from '../../patterns/ContactForm';
import ContactWrapper from './styles/ContactWrapper';

const socialLinks = [
  {
    key: 'ft-gh',
    class: 'github',
    alt: 'Github',
    icon: '/images/icons/github.svg',
    url: 'https://github.com/danilok',
  },
  {
    key: 'ft-lk',
    class: 'linkedin',
    alt: 'LinkedIn',
    icon: '/images/icons/linkedin.svg',
    url: 'https://www.linkedin.com/in/danilo-yorinori/',
  },
];

export default function ContactScreen() {
  return (
    <ContactWrapper>
      <SectionTitle>
        Contato
      </SectionTitle>

      <ContactWrapper.ButtonsWrapper>
        <Text
          as="p"
          variant="contact"
          color="primary.main"
          textAlign="center"
          margin="0"
          textTransform="uppercase"
        >
          Networking
        </Text>
        {socialLinks.map((link) => (
          <ContactWrapper.Button
            className={link.class}
            iconUrl={link.icon}
            href={link.url}
            key={link.key}
          >
            <Text
              tag="span"
            >
              {link.alt}
            </Text>
          </ContactWrapper.Button>
        ))}
      </ContactWrapper.ButtonsWrapper>

      <ContactWrapper.FormWrapper>
        <FormContent />
      </ContactWrapper.FormWrapper>
    </ContactWrapper>
  );
}
