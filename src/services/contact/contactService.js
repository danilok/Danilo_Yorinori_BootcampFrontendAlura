import HttpClientService from '../httpClient/httpClientService';

const contactService = {
  async sendMessage(
    contactDTO,
    HttpClientModule = HttpClientService,
  ) {
    const response = await HttpClientModule('/api/messages', {
      method: 'POST',
      body: contactDTO,
    });
    return response;
  },
};

export default contactService;
