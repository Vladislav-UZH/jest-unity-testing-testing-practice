const sum = (a, b) => {
  return a + b;
};

const objReturns = (obj) => {
  obj.one = 1;

  return obj;
};

module.exports = { sum, objReturns };
