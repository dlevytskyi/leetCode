function isPalindrome(s: string): boolean {
  if (s.length == 1) return true;
  const normalizedS = s.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
  const reversedS = normalizedS.split('').reverse().join('');
  return normalizedS === reversedS;
};

console.log(isPalindrome("0P"));