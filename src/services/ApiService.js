
const apiUrl = process.env.VUE_APP_API_URL;
// const apiUrl = 'https://lwj842clhe.execute-api.us-east-1.amazonaws.com/production';


async function handleResponse(response) {
  const text = await response.text();

  if (!response.ok) {
    const responseError = {
      type: 'Error',
      message: response.statusText || 'Something went wrong',
      response,
      code: response.status || '',
    };

    let error = new Error();

    error = { ...error, ...responseError };

    throw error;
  }


  try {
    const data = JSON.parse(text);

    return Promise.resolve(data);
  } catch (ex) {
    return Promise.resolve(text);
  }
}


export default {
  async post(path, payload, headers) {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(payload),
    };

    const response = await fetch(`${apiUrl}${path}`, requestOptions);

    return handleResponse(response);
  },
};
