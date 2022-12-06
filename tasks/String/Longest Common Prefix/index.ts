function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    if (!strs[i].startsWith(prefix)) {
      prefix = checkCommonPrefix(strs[i], prefix);
    }
    if (prefix == '') return '';
  }
  return prefix;
};

function checkCommonPrefix(str: string, prefix: string): string {
  while (prefix.length > 0) {
    if (str.startsWith(prefix)) {
      return prefix;
    }
    prefix = prefix.substring(0, prefix.length - 1);
  }
  return '';
}

console.log(longestCommonPrefix(['fly', 'flqqweqe', 'flower']))