/*=========================TWO-SUM====================================*/

let nums = [2, 7, 11, 15]
let target = 9

const twoSum = (nums, target) => {
    let preValues = {}
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const targetValue = target - currentNumber;
        const index = preValues[targetValue];
        if (index != null) {
            console.log(index, i);
        } else {
            preValues[currentNumber] = i
        }
    }
};

twoSum(nums, target)
