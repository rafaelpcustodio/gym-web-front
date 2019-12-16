const validateInput = (input, length) => {
  if (input.length < length) {
    return false;
  }
  return true;
};

const parseJwt = token => {
  if (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  return null;
};

const not = expression => !expression;

export { not, validateInput, parseJwt };
