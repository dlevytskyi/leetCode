//FIRST SOKUTION
// function isAnagram(s: string, t: string): boolean {
//   if (s.length !== t.length) return false;

//   for (let i = 0; i < s.length; i++) {
//     const currCharIndex = t.indexOf(s[i])
//     if (currCharIndex !== -1) {
//       t = t.substring(0, currCharIndex) + t.substring(currCharIndex + 1, t.length);
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

const isAnagram = function (s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const chars = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    const pos1 = s.charCodeAt(i) - 'a'.charCodeAt(0);
    const pos2 = t.charCodeAt(i) - 'a'.charCodeAt(0);
    chars[pos1]++;
    chars[pos2]--;
  }
  return chars.every(n => n == 0);
}

console.log(isAnagram('anagram', 'nagaram'));