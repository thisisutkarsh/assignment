// Create a function that takes a number as an argument. Add up all
//  the numbers from 1 to the number you passed to the function. For example,
// if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10

function addup(num) {
    let count = 1;
    let sum = 0;
    while (count <= num) {
        sum += count++;
    }
    return (console.log(sum))
}
addup(13)