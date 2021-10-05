import CMSGraphQLClientService from '../../../services/cms/CMSGraphQLClientService';

export default async function getContent({ preview } = { preview: false }) {
  const cmsGraphQLClient = CMSGraphQLClientService(preview);
  const response = await cmsGraphQLClient.getAbout();
  return response;
}
