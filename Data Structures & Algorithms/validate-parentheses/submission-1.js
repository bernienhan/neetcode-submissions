class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pair = {
            "(": ")",
            "[": "]",
            "{": "}",
        };
        for (const c of s) {
            if (pair[c]) {
                stack.push(c);
            } else {
                const top = stack.pop();
                if (!top || pair[top] !== c) {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
