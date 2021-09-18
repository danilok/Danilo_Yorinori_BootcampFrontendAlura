export default async function HttpClientService(
  url,
  { headers, body, ...options },
  fetchModule = fetch,
) {
  const responseNotOk = {
    400: 'Requisição inválida',
    404: 'URL não encontrada',
  };

  try {
    const response = await fetchModule(url, {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      ...options,
    });
    if (!response.ok) {
      throw new Error(responseNotOk[response.status]);
    }
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    throw new Error(error.message);
  }
}
