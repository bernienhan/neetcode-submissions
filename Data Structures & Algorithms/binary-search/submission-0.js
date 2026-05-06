class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        var temp = 0;
        for (var i = 0; i <= nums.length - 1; i++) {
            if (nums[i] === target) {
                return i;
            } else if (i <= nums.length - 1 && nums[i] !== target) {
                temp = -1;
            }
        }

        return temp;
    }
}
