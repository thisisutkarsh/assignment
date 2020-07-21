// Create a function that takes two strings as arguments and returns the number
//  of times the first string(the single character) is found in the second string.

function findOccurance(a, b) {
    let str = b;
    //new RegExp(stringToMatch , flags)
    let testStr = new RegExp(a, "g")
    let count = (str.match(testStr) || []).length;
    return console.log(count);
}
findOccurance("c", "Chamber of secrets")