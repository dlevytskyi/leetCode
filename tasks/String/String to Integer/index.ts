const MAX = 2147483647;
const MIN = -2147483648;

function myAtoi(s: string): number {
  for (let i = 0; i < s.length; i++) {
    const number = Number.parseInt(s.substring(i));
    if (number != NaN) {
      if (number >= MAX || number <= MIN) return Math.sign(number) == -1 ? MIN : MAX;
      return number || 0;
    }
  }
  return 0;
}


console.log(myAtoi("words and 987"));
console.log(myAtoi("42"));
console.log(myAtoi("42 asjhdlashjkdkhjas"));
