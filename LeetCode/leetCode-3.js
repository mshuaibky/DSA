/*===============Divide Array in Sets of K Consecutive Numbers==============*/

nums = [3, 2, 9, 1]
k = 3

const isPossibleDivide = (nums, k) => {
    console.log(nums.length);
    if (nums.length % k == 0) console.log(true);
    else console.log(false);
};

isPossibleDivide(nums, k)