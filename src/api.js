export const API_URL = 'https://paguru-challenge.herokuapp.com/api/v1/';

export function TOKEN_POST(body) {
  return {
    url: API_URL + 'auth/',

    options: {
      method: 'POST',
      headers: {
        Authorization: 'token [ad58f1c85bb8636a76913f1e6dc2d723573446be]',
      }, //cat 123 error 401
    },
    body: JSON.stringify(body),
  };
}

export function USER_GET(token) {
  return {
    url: API_URL + 'users/',
    options: {
      method: 'POST',
      headers: {
        Authorization: 'token [ad58f1c85bb8636a76913f1e6dc2d723573446be]',
      },
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: API_URL + 'users/',
    options: {
      method: 'GET',
      header: {
        Authirization: 'Bearer' + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: API_URL + 'users/',
    options: {
      method: 'POST',
    },
    headers: {
      'Content-Type': 'applications/json',
    },
    body: JSON.stringify(body),
  };
}
