/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Cover from '../../commons/Cover';
import Content from '../../commons/Content';
import Header from '../../commons/Header';
import Modal from '../../commons/Modal';
import ContactForm from '../../patterns/ContactForm';
import Footer from '../../commons/Footer';
import SEO from '../../commons/SEO';

const headerLinks = [
  {
    text: 'Sobre Mim',
    url: '/about/',
  },
  {
    text: 'Contato',
    url: '/contact/',
  },
];

const footerLinks = [
  {
    key: 'ft-lk',
    alt: 'Linkedin',
    icon: '/images/icons/linkedin.png',
    url: 'https://www.linkedin.com/in/danilo-yorinori/',
  },
  {
    key: 'ft-gh',
    alt: 'Github',
    icon: '/images/icons/github.png',
    url: 'https://github.com/danilok',
  },
  {
    key: 'ft-md',
    alt: 'Medium',
    icon: '/images/icons/medium.png',
    url: 'https://medium.com/@daniloksy',
  },
];

export const WebsitePageContext = React.createContext({
  toggleModalContato: () => { },
  animation: () => { },
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  coverProps,
  modalDisplayProps,
}) {
  const [modalOpened, setModalOpened] = React.useState(false);
  const animation = useAnimation();

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalContato: () => {
          setModalOpened(!modalOpened);
        },
        animation,
      }}
    >
      <SEO
        {...seoProps}
      />

      {coverProps.display && (
        <InView
          style={{ backgroundColor: 'black' }}
          threshold={0.001}
          onChange={(inView) => {
            if (!inView) {
              animation.start({
                display: 'none',
              });
            }
          }}
        >
          <motion.div
            animate={animation}
          >
            <Cover
              user="Danilo Yorinori"
            />
          </motion.div>
        </InView>
      )}
      <Content id="content">
        <Header
          links={headerLinks}
          animation={animation}
        />
        {modalDisplayProps && (
          <Modal
            isOpen={modalOpened}
            onClose={() => {
              setModalOpened(false);
            }}
          >
            {(modalProps) => (
              <ContactForm modalProps={modalProps} />
            )}
          </Modal>
        )}

        {children}

        <Footer links={footerLinks} />
      </Content>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  coverProps: {
    display: false,
  },
  modalDisplayProps: true,
};

WebsitePageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  seoProps: PropTypes.shape({
    title: PropTypes.string,
  }),
  pageBoxProps: PropTypes.shape({
    flexWrap: PropTypes.string,
    justifyContent: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  coverProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  modalDisplayProps: PropTypes.bool,
};
