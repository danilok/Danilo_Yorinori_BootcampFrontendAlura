import React from 'react';
import Head from 'next/head';
import Cover from '../src/components/commons/Cover';
import Content from '../src/components/commons/Content';
import Header from '../src/components/commons/Header';
import ProjectsWrapper from '../src/components/commons/ProjectsWrapper';
import Footer from '../src/components/commons/Footer';
import Modal from '../src/components/commons/Modal';

const headerLinks = [
  {
    text: 'Sobre Mim',
    url: '/about',
  },
  {
    text: 'Contato',
    url: '/contact',
  },
];

const footerLinks = [
  {
    key: 'ft-lk',
    icon: '/images/icons/linkedin.png',
    url: 'https://www.linkedin.com/in/danilo-yorinori/',
  },
  {
    key: 'ft-gh',
    icon: '/images/icons/github.png',
    url: 'https://github.com/danilok',
  },
  {
    key: 'ft-md',
    icon: '/images/icons/medium.png',
    url: 'https://medium.com/@daniloksy',
  },
];

export default function Home() {
  const [cards, setCards] = React.useState([]);
  const [modalOpened, setModalOpened] = React.useState(false);

  React.useEffect(async () => {
    try {
      const projectsRes = await fetch('/api/projects');
      if (!projectsRes.ok) {
        throw new Error('Não foi possível pegar os dados :(');
      }
      const resposta = await projectsRes.json();
      setCards(resposta);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio - Danilo Yorinori</title>
        <meta name="title" content="Portfolio" />
        <meta name="description" content="Portfolio - Danilo Yorinori" />
        <meta property="og:title" content="Portfolio" key="title" />
        <meta property="og:description" content="Portfolio - Danilo Yorinori" key="description" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-danilok.vercel.app" />
        <meta property="og:image" content="https://portfolio-danilok.vercel.app/images/homepage.png" />
      </Head>
      <Cover
        user="Danilo Yorinori"
      />
      <Content id="content">
        <Header links={headerLinks} />
        <Modal
          isOpen={modalOpened}
          onClose={() => {
            setModalOpened(false);
          }}
        >
          {(propsDoModal) => (
            <div
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...propsDoModal.boxAttributes}
            >
              <p>Modal</p>
            </div>
          )}
        </Modal>
        <ProjectsWrapper
          cards={cards}
          isOpen={modalOpened}
          onClickContact={() => {
            setModalOpened(!modalOpened);
          }}
        />
        <Footer links={footerLinks} />
      </Content>
    </>
  );
}
