let text =
  "JavaSCript is fun but challenging when you want to master it quickly";
let arr = text.split(" ");
console.log(arr);
// Remove very short words
let filteredArr = arr.filter((word) => word.length > 2);
console.log(filteredArr); 
// remove specific number of words
let newArr = arr.splice(0, 5);
console.log(newArr);
// reverse
newArr.reverse();
console.log(newArr);
// add at beginning and the end
newArr.unshift("FIRST");
newArr.push("LAST");
console.log(newArr);
// check if word exists
let isThere = newArr.includes("challenging");
console.log(isThere);
// print each word at a separate line
console.log(newArr.join("\n"));
//join word into singel string
let newStr = newArr.join("-");
console.log(newStr);
// sort
newArr.sort();
console.log(newArr);
// print the index
console.log(newArr.indexOf("fun"));
