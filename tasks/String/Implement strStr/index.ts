function strStr(haystack: string, needle: string): number {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let matched = true;
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] != undefined && haystack[i + j] == needle[j]) {
          continue;
        } else {
          matched = false;
          break;
        }
      }
      if (matched == true) return i;
    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));