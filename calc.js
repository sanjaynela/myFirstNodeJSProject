//Test
exports.add = function add(a, b) {
  return a + b;
};

exports.minus = function minus(a, b) {
  return a - b;
};

function prime(a) {
  if (a == 0 || a == 1) {
    return false;
  }
  var isPrime = true;
  for (i = 2; i < a; i++) {
    if (a % i == 0) {
      isPrime = false;
    }
  }
  return isPrime;
}
exports.prime = prime;
