class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] result = new int[2];
        int i = 0;
        for (i = 0; i < nums.length; i++) {
            int r = target - nums[i];
            for (int j = 0; j < nums.length; j++) {
                if (r == nums[j] && i != j) {
                    result[0] = i;
                    result[1] = j;
                    return result;
                }
            }
        }
        return result;
    }
}
