import React from 'react';
import ProjectScreen from '../../src/components/screens/Project';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function ProjectPage({ project }) {
  return (
    <ProjectScreen
      project={project}
    />
  );
}

ProjectPage.propTypes = ProjectScreen.propTypes;

export default websitePageHOC(ProjectPage);

export async function getStaticProps({ params }) {
  try {
    const projectsRes = await fetch('https://danilo-yorinori-bootcamp-frontend-alura-danilok.vercel.app/api/projects');
    if (!projectsRes.ok) {
      throw new Error('Não foi possível pegar os dados :(');
    }
    const projects = await projectsRes.json();

    const dadosDaPagina = projects.find((project) => project.repo.split('/')[4] === params.project);

    return {
      props: {
        project: dadosDaPagina,
        pageWrapperProps: {
          seoProps: {
            headTitle: dadosDaPagina.title,
          },
          pageBoxProps: {
            justifyContent: 'space-between',
          },
        },
      },
    };
  } catch (error) {
    return {
      props: {
        project: {
          title: '',
          questions: [],
        },
      },
    };
  }
}

export async function getStaticPaths() {
  try {
    const projectsRes = await fetch('https://danilo-yorinori-bootcamp-frontend-alura-danilok.vercel.app/api/projects');
    if (!projectsRes.ok) {
      throw new Error('Não foi possível pegar os dados :(');
    }
    const projects = await projectsRes.json();

    const paths = projects.reduce((valorAcumulado, project) => {
      const repoName = project.repo.split('/')[4];
      const param = { params: { project: repoName } };
      return [
        ...valorAcumulado,
        param,
      ];
    }, []);
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
}
