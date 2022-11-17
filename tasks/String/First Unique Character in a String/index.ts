function firstUniqChar(s: string): number {
  let set: any = new Set();
  let uniq: any = new Set();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) {
      uniq.delete(s[i]);
    } else {
      set.add(s[i]);
      uniq.add(s[i]);
    }
  }
  return [...uniq][0] ? s.indexOf([...uniq][0]) : -1;
};

console.log(firstUniqChar("leetcode"));