import { CMSGraphQLClient, gql } from '../../infra/cms/CMSGraphQLClient';

const CMSGraphQLClientService = (preview) => ({
  async getProjects() {
    const query = gql`
        query {
          allProjects {
            id
            highlight
            img
            repo
            slug
            text
            title
            url
          }
        }
      `;

    const client = CMSGraphQLClient({ preview });

    const response = await client.query({ query });

    return response.data.messages.allProjects;
  },
  async getProject(slug) {
    const query = gql`
      query {
        project {
          slug
          repo
          img
          id
          highlight
          text
          url
          title
        }
      }
    `;

    const variables = {
      slug,
    };

    const client = CMSGraphQLClient({ preview });

    const response = await client.query({ query, variables });

    return response.data.messages.project;
  },
  async getAbout() {
    const query = gql`
        query {
          about {
            id
            local
            descriptionP1
            descriptionP2
          }
        }
      `;

    const client = CMSGraphQLClient({ preview });

    const response = await client.query({ query });

    return response.data.messages.about;
  },
  async getRepos() {
    const query = gql`
        query {
          allRepos {
            id
            name
            url
          }
        }
      `;

    const client = CMSGraphQLClient({ preview });

    const response = await client.query({ query });

    return response.data.messages.allRepos;
  },
});

export default CMSGraphQLClientService;
