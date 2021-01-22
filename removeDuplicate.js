const arr = [0, 1, 2, 3, 4, 5, 6, 4, 7, 7, 8, 9];
const newArr = [];
for (let i = 0; i < arr.length; i++) {
    let count = 0;
    const temp = arr[i];
    for (let j = i+1; j < arr.length; j++) {
        if (arr[j] == temp) {
            count++;
        }
    }
    if (count == 0) {
        newArr.push(temp);
    }
}
console.log(newArr);