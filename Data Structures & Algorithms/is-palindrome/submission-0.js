class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
          if (s.length === 1) return true;
  var array = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");

  var i = 0;
  for (var j = array.length - 1; j >= array.length / 2; j--) {
    if (array[i] === array[j]) {
      i++;
    } else {
      return false;
    }
  }
  return true;
    }
}
