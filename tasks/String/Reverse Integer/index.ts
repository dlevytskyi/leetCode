function reverse(x: number): number {
  const MAX_INT: number = Math.pow(2, 31);
  const answer = Math.sign(x) * parseInt(x.toString().split('').reverse().join(''));
  return MAX_INT > answer && answer > -MAX_INT ? answer : 0;
};

console.log(reverse(-1223));