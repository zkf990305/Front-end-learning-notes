module.exports = function (...rest) {
  return rest.reduce((a, b) => a + b, 0);
};
