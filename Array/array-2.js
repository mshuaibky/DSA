let arr = []
arr = [1, 2, 3, 4, 5]
arr[arr.length] = 6;
console.log(arr);

let value = 4
const fn = (arr,value) => {

    for (i = 0; i < arr.length; i++) {
        if (arr[i] == value) {
            console.log(arr[i]%2);
            if (arr[i] % 2 == 0) {
                console.log('even');
                arr[i] = (arr[i] / 2)
                arr.push(arr[i])
            } else {
                console.log('odd');
                for (j = i; j < arr.length - 1; j++) {
                    a[j] = a[j + 1];
                }
            }
            console.log(arr[i]);
        }
        break;
    }
    // console.log(arr);
}

fn(arr,value);