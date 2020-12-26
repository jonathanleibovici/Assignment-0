function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  let sum = 0 
    let lastItem = nums[nums.length - 1]
    // to get the last item in the array just do nums is the array
    //then the length of the array - 1 to get the last index
    sum += nums[0] + lastItem
  
  
  return sum
 }

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;