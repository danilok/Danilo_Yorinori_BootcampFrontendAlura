import CMSGraphQLClientService from '../src/services/cms/CMSGraphQLClientService';

const methods = {
  POST: async (request, response) => response.status(403).send(),
  GET: async (request, response) => {
    const cmsGraphQLClient = CMSGraphQLClientService();
    const messages = await cmsGraphQLClient.getProjects();
    return response.status(200).send(messages);
  },
  PUT: async (request, response) => response.status(403).send(),
  DELETE: async (request, response) => response.status(403).send(),
};

export default async function projects(request, response) {
  const { method } = request;
  const exec = methods[method];

  if (!exec) {
    return response.status(405).send();
  }

  return exec(request, response);
}
