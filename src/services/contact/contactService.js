import HttpClientService from '../httpClient/httpClientService';
import isStagingEnv from '../env/isStagingEnv';

const BASE_URL = isStagingEnv
  ? 'https://contact-form-api-jamstack.herokuapp.com/message'
  : '/api/messages';

const contactService = {
  async sendMessage(
    contactDTO,
    HttpClientModule = HttpClientService,
  ) {
    const response = await HttpClientModule(BASE_URL, {
      method: 'POST',
      body: contactDTO,
    });
    return response;
  },
};

export default contactService;
