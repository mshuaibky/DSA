/*===================Find Numbers with Even Number of Digits=================*/


let nums = [12, 345, 2, 6, 7896]


const findNumbers = (nums) => {
    let number = 0
    for (i = 0; i < nums.length; i++) {
        let numLen = nums[i].toString().length
        console.log('numlen',numLen);
        if (numLen % 2 == 0) {
            number++;
        }
    }
        console.log(number);
};

findNumbers(nums)