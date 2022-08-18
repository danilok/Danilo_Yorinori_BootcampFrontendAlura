import React from 'react';
import { WebsitePageContext } from '../../wrappers/WebsitePage';
import ProjectsWrapper from '../../commons/ProjectsWrapper';

export default function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);
  const [cards, setCards] = React.useState([]);

  const callApi = async () => {
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
  };

  React.useEffect(() => {
    callApi();
  }, []);

  return (
    <ProjectsWrapper
      cards={cards}
      onClickContact={() => {
        websitePageContext.toggleModalContato();
      }}
    />
  );
}
