import React from 'react';
import ProjectScreen from '../../src/components/screens/Project';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';
import CMSGraphQLClientService from '../../src/services/cms/CMSGraphQLClientService';

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
    const cmsGraphQLClient = CMSGraphQLClientService();
    const project = await cmsGraphQLClient.getProject(params.project);

    return {
      props: {
        project,
        pageWrapperProps: {
          seoProps: {
            headTitle: project.title,
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
    const cmsGraphQLClient = CMSGraphQLClientService();
    const projects = await cmsGraphQLClient.getProjects();

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
