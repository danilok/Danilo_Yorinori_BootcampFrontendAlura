import HttpClientService from '../httpClient/httpClientService';

const contactService = {
  async sendMessage(
    contactDTO,
    HttpClientModule = HttpClientService,
  ) {
    const response = await HttpClientModule('https://contact-form-api-jamstack.herokuapp.com/message', {
      method: 'POST',
      body: contactDTO,
    });
    return response;
  },
};

export default contactService;
