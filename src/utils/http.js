const handleError = error => {
  console.error(error);
  const { message, response, status } = error;
  console.log(message);
  console.log(response);
  console.log(status);
  return response.data.message;
};

export { handleError };
