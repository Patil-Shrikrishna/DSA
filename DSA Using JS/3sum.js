// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.
// Example:-
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

let nums = [-1, 0, 1, 2, -1, -4];

const sumZero = function (nums) {
  let isEmpty = 0,
    sum = [],
    output = [];
  for (const x of nums) {
    isEmpty += x;
  }
  if (isEmpty == 0) {
    return [nums];
  }

  //   For checking the sum value == 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      for (let k = 0; k < j + 1; k++) {
        if (i != j && i != k && j != k) {
          if (nums[i] + nums[j] + nums[k] == 0) {
            sum.push([nums[i], nums[j], nums[k]]);
          }
        }
      }
    }
  }
  console.log(sum)
  // for sorting the array value
  for (let i = 0; i < sum.length; i++) {
    for (let j = 0; j < sum[i].length; j++) {
      if (sum[i][j] > sum[i][j + 1]) {
        [sum[i][j], sum[i][j + 1]] = [sum[i][j + 1], sum[i][j]];
      }
    }
  }

  console.log(sum);
};

sumZero(nums);