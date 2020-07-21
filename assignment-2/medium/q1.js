// Write a function that reverses all the words in a sentence
// that start with a particular letter

function replace(sentence, letter) {
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === letter && sentence[i - 1] === " ") {
            let count = sentence[i].split(" ").reverse().join();
            console.log(count);
        }
    }
    console.log(sentence)
}
replace("word searches are super fun", "s")