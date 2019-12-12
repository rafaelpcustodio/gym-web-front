const USER_KEY = 'token';

const isLogged = () => {
  console.log(sessionStorage);
  return !!sessionStorage.getItem(USER_KEY);
};

export { isLogged };
