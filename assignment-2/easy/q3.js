// Create a function that takes a string and replaces
// the vowels with another character.
// a = 1, e = 2, i = 3, o = 4, u = 5

function replaceVowel(input) {
    let output = input.replace(/a/g, 1);
    output = output.replace(/e/g, 2);
    output = output.replace(/i/g, 3);
    output = output.replace(/o/g, 4);
    output = output.replace(/u/g, 5);
    return console.log(output);
}
replaceVowel("karachi")