// print each word with last letter + join words with -
let words = ["Hello", "World", "JS"];

words.forEach((word) => {
  console.log(word + word[word.length - 1]);
});

let string = words.join("-");
console.log(string);
