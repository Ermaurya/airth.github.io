const a = 2, b = 5;
const n = 7;
const findNthTerm = (first, second, n) => {
   const d = second - first;
   const fact = (n - 1) * d;
   const term = first + fact;
   return term;
};
console.log(findNthTerm(a, b, n));