import React from 'react';
import Head from 'next/head';
import { WebsitePageContext } from '../../wrappers/WebsitePage';
import ProjectsWrapper from '../../commons/ProjectsWrapper';

export default function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);
  const [cards, setCards] = React.useState([]);

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
      <ProjectsWrapper
        cards={cards}
        // isOpen={modalOpened}
        onClickContact={() => {
          // setModalOpened(!modalOpened);
          websitePageContext.toggleModalContato();
        }}
      />
    </>
  );
}
