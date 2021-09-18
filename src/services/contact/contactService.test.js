import contactService from './contactService';

const successResponse = {
  name: 'nome',
  email: 'email',
  message: 'mensagem',
};
async function HttpClientModule() {
  return new Promise((resolve) => {
    resolve(successResponse);
  });
}

async function HttpClientModuleError() {
  return new Promise(() => {
    throw new Error('Erro ao enviar mensagem');
  });
}

describe('contactService', () => {
  describe('when user makes a request', () => {
    describe('and it succeed', () => {
      test('get a response that matches sent body', async () => {
        const response = await contactService.sendMessage(
          successResponse,
          HttpClientModule,
        );

        expect(response).toEqual(successResponse);
      });
    });
    describe('and it fails', () => {
      test('throws an error', async () => {
        await expect(contactService.sendMessage(
          successResponse,
          HttpClientModuleError,
        ))
          .rejects
          .toThrow('Erro ao enviar mensagem');
      });
    });
  });
});
