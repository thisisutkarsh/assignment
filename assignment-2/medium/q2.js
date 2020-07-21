// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements

function check(...arr) {
    let count = 1;
    for (let i = 0; i < 4; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
            console.log(count);
        }
    }
    if (count === 4) {
        return console.log("true");
    } else {
        return console.log("false");
    }
}
check(["@", "@", "@", "@"])