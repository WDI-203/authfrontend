const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

export const registerUser = async (username, password) => {
  const url = `${urlEndpoint}/auth/register-user`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const responseJSON = await response.json();
  return responseJSON.success;
};

export const loginUser = async (username, password) => {
  const url = `${urlEndpoint}/auth/login-user`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const responseJSON = await response.json();
  console.log("responseJSON ", responseJSON);
  if (responseJSON.success) {
    localStorage.setItem(
      process.env.REACT_APP_TOKEN_HEADER_KEY,
      JSON.stringify(responseJSON.token)
    );
  }
  return responseJSON;
};

export const validateToken = async () => {
  const url = `${urlEndpoint}/auth/validate-token`;
  const token = JSON.parse(
    localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY)
  );
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      [process.env.REACT_APP_TOKEN_HEADER_KEY]: token,
    },
  });
  const responseJSON = await response.json();
  return responseJSON;
};

export const logoutUser = () => {
  localStorage.removeItem(process.env.REACT_APP_TOKEN_HEADER_KEY);
  return true;
};

export const getUserToken = () => {
  return JSON.parse(
    localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY)
  );
};
