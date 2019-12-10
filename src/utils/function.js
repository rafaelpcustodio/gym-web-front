const validateInput = (input, length) => {
  if (input.length < length) {
    return false;
  }
  return true;
};

const not = expression => !expression;

export { not, validateInput };
