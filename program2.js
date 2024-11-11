const decodeTheRing = function (s, p) {
  let i = 0, j = 0;

  while (i < s.length && j < p.length) {
    if (p[j] === '*') {
      // Skip ahead in the message until the next wildcard or the end
      while (i < s.length && j < p.length - 1 && p[j + 1] !== '*') {
        i++;
      }
      j++;
    } else if (p[j] === '?' || s[i] === p[j]) {
      i++;
      j++;
    } else {
      return false;
    }
  }

  return i === s.length && j === p.length;
};

module.exports = decodeTheRing;
