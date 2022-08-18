import HttpClientService from './httpClientService';

const someUrl = 'http://someurl.com';
const successResponse = {
  name: 'nome',
  email: 'email',
  message: 'mensagem',
};
async function fetchModule() {
  return {
    ok: true,
    json: () => new Promise((resolve) => {
      resolve(successResponse);
    }),
  };
}

async function fetchModuleError400() {
  return {
    ok: false,
    status: 400,
  };
}
async function fetchModuleError404() {
  return {
    ok: false,
    status: 404,
  };
}

describe('httpClientService', () => {
  describe('when user makes a request', () => {
    describe('and it succeed', () => {
      test('get a response that matches sent body', async () => {
        const response = await HttpClientService(
          someUrl,
          {
            method: 'POST',
            body: JSON.stringify(successResponse),
          },
          fetchModule,
        );

        expect(response).toEqual(successResponse);
      });
    });
    describe('and it fails', () => {
      describe('for invalid URL', () => {
        test('throws an error', async () => {
          await expect(HttpClientService(
            someUrl,
            {
              method: 'POST',
              body: JSON.stringify(successResponse),
            },
            fetchModuleError400,
          ))
            .rejects
            .toThrow('Requisição inválida');
        });
      });
      describe('for bad request', () => {
        test('throws an error', async () => {
          await expect(HttpClientService(
            someUrl,
            {
              method: 'POST',
              body: JSON.stringify(successResponse),
            },
            fetchModuleError404,
          ))
            .rejects
            .toThrow('URL não encontrada');
        });
      });
    });
  });
});
