// Create a function that takes two strings as arguments and returns the number
//  of times the first string(the single character) is found in the second string.

function findOccurance(a, b) {
    let test = b;
    //new RegExp(stringToMatch , flags)
    let search = new RegExp(a, "g")
    let count = (test.match(search) || []).length;
    return console.log(count);
}
findOccurance("c", "Chamber of secrets")