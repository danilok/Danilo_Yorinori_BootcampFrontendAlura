import { GraphQLClient, gql as GraphQLTag } from 'graphql-request';

export const gql = GraphQLTag;

export function CMSGraphQLClient(
  { preview } = { preview: false },
  GraphQLClientModule = GraphQLClient,
) {
  const envUrl = process.env.NEXT_PUBLIC_DATOCMS_URL;
  const DatoCMSURL = preview
    ? `${envUrl}preview`
    : envUrl;
  const TOKEN = process.env.DATO_CMS_TOKEN;
  const client = new GraphQLClientModule(DatoCMSURL, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return {
    async query({ query, variables }) {
      const messages = await client.request(query, variables);

      return {
        data: {
          messages,
        },
        error: {
          err: {},
        },
      };
    },
  };
}
