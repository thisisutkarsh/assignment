// Create a function that takes an array of strings and returns an array with only the strings that have
// numbers in them. If there are no strings containing numbers, return an empty array.

function strngNo(arr) {
    let tmp = [];
    if (arr.length === 0 || arr.length === 1) {
        return console.log(arr);
    }
    let searchString = /[0-9]/g;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].match(searchString)) {
            tmp.push(arr[i]);
        }
    }
    return console.log(tmp);
}
strngNo(["1a", "a", "2b", "b"])