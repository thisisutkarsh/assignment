// Create a function that takes a string and replaces
// the vowels with another character.
// a = 1, e = 2, i = 3, o = 4, u = 5

function replaceVowel(input) {
    // let count = 0;
    const regex = /a|e|i|o|u/g;
    const output = input.replace(regex, );
    // for (let i = 0; i < input.length; i++) {
    //     let testStr = new RegExp(input[i], g);
    //     let count = input.match(testStr)
    // }
    return console.log(output);
}
replaceVowel("karachi")