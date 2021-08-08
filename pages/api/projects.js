const methods = {
  POST: async (request, response) => response.status(403).send(),
  GET: async (request, response) => {
    const cards = [
      {
        img: 'https://picsum.photos/800/800?random=1',
        title: 'Instalura',
        text: 'Project 1',
        url: 'https://instalura-danilok.vercel.app/',
        highlight: false,
        repo: 'https://github.com/danilok/instalura',
      },
      {
        img: 'https://picsum.photos/800/800?random=2',
        title: 'Alurakut',
        text: 'Project 2',
        url: 'https://alurakut-danilok.vercel.app/',
        highlight: false,
        repo: 'https://github.com/danilok/alurakut',
      },
      {
        img: 'https://picsum.photos/800/800?random=3',
        title: 'Aluraquiz',
        text: '',
        url: 'https://aluraquiz.danilok.vercel.app/',
        highlight: false,
        repo: 'https://github.com/danilok/aluraquiz',
      },
      {
        img: 'https://picsum.photos/800/800?random=4',
        title: 'AluraDev',
        text: 'Projeto desenvolvido para o Challenge Front-end da Alura',
        url: 'https://alura-dev-danilok.vercel.app/',
        highlight: true,
        repo: 'https://github.com/danilok/alura-dev',
      },
    ];

    return response.status(200).send(cards);
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
