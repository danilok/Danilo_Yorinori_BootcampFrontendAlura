import { SiteClient } from 'datocms-client';

const DatoCMSClientService = () => {
  const token = process.env.DATO_CMS_PREVIEW_MESSAGE_TOKEN;
  const client = new SiteClient(token);

  return {
    async createMessage(data) {
      try {
        const record = await client.items.create({
          itemType: process.env.NEXT_PUBLIC_MESSAGE_MODEL_ID,
          ...data,
        });
        return record;
      } catch (err) {
        throw new Error('Erro ao enviar mensagem!');
      }
    },
  };
};

export default DatoCMSClientService;
