let nums2 = [10, 20, 30, 40, 50];
let temp = nums2[3];
nums2[3] = nums2[1];
nums2[1] = temp;

console.log(nums2);
