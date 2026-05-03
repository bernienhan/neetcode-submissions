class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var s_op = s.split("").sort().join("");
        var t_op = t.split("").sort().join("");
        if (s_op === t_op) {
            return true;
        }
        return false;
    }
}
