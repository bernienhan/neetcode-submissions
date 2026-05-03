class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var isResult = false;

        const hashmap = nums.reduce((acc, num) => {
            if (acc[num]) {
                isResult = true;
            } else {
                acc[num] = true;
            }
            return acc;
        }, {});

        return isResult;
    }
}
