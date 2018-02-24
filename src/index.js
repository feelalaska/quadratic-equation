module.exports = function solveEquation(equation) {
  // your implementation
  var arr = equation.split(' ');
  var a, b, c, d, x1, x2;
  a = Number(arr[0]);
  b = arr[3] == '-' ? -arr[4] : Number(arr[4]);
  c = arr[7] == '-' ? -arr[8] : Number(arr[8]);
  d = b*b - (4*a*c);
  x1 = Math.round((-b + Math.sqrt(d)) / (2*a));
  x2 = Math.round((-b - Math.sqrt(d)) / (2*a));
  var sol = [x1, x2];
  sol.sort(function(a, b) {
    return a - b;
  });
  return sol;
}
