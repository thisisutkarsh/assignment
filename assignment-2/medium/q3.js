function removeDuplicate(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return console.log(arr);
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(i, 1)
            }
        }
    }
    return console.log(arr)
}
removeDuplicate(["John", "Taylor", "John"])