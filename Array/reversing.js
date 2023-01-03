let nums = [12, 345, 2, 6, 7896]
let value = 4;
let pos = 2

//reverse an Array


const reverse = (nums) => {
    for (let i = 0; i < nums.length / 2; i++) {
        let temp = nums[i];
        nums[i] = nums[nums.length - i - 1];
        nums[nums.length - i - 1] = temp;
    }
    console.log(nums);
}

// reverse(nums);

//insert in an array


const insert = (nums,pos,value) => {
    for (i = nums.length - 1; i >= pos; i--) {
        nums[i + 1] = nums[i]
    }
    nums[pos] = value
    console.log(nums);
}

insert(nums,pos,value);

//deleting


const deleteVal = (nums, pos) => {
    for (let i = pos; i < nums.length-1; i++) {
        nums[i] = nums[i + 1]
    }
    nums[nums.length-1] 
    console.log(nums);
}


// deleteVal(nums, pos);