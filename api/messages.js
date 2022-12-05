import DatoCMSClientService from '../src/services/cms/DatoCMSClientService';

const datoCMSClientService = DatoCMSClientService();

const methods = {
  POST: async (request, response) => {
    try {
      const created = await datoCMSClientService.createMessage(request.body);
      return response.status(200).send({
        name: created.name,
        email: created.email,
        message: created.message,
      });
    } catch (err) {
      return response.status(400).send(err.message);
    }
  },
  GET: async (request, response) => response.status(403).send(),
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
