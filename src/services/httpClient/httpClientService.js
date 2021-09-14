export default async function HttpClientService(url, { headers, body, ...options }) {
  try {
    const response = await fetch(url, {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      ...options,
    });
    if (!response.ok) {
      throw new Error('Erro ao enviar mensagem');
    }
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    throw new Error('Erro ao enviar mensagem');
  }
}
