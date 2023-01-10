console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(num){
    let sum = 0;

    for (let i = 0; i < num.length; i++){
        sum = sum +num[i];
    }

    return sum;


   
}
console.log(arraySum(numbers));
// teaser following along

function arraySum(num){
let sum = 0;
num.forEach(function(val) {
    sum += val;
});
return sum;
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let book = {};

book.title = "Harry Potter and the Goblet of Fire";
book.pages = "636";
book.readCount = "3";

console.log(book);

book.info = function() {
    return `${this.title}, by J.K. Rowling, is ${this.pages} pages, and has been read ${this.readCount} times.`;
}

console.log(book.info());


//Exercise 3 Section
//This took so much trial and error lol
console.log("EXERCISE 3:\n==========\n");
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWords(sentence) {
    let result = [];
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++){
        let letters = words[i].split("");
        letters.reverse();
        let reversedWords = letters.join("");//delimiter = ("")
        result.push(reversedWords);
    }

    return result.join(" ");
    
}

console.log(reverseWords(sentence));


// Exercise 4 Section
//completely lost had to follow along lol

console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
console.log(csvData);

const rows = csvData.split("\n");
console.log("Rows:", rows);

const headers = rows[0].split(",");
console.log("Headers:", headers);

const resultArray = [];

for (let i = 1; i < rows.length; i++){
    const valuesArray = rows[i].split(",");
    console.log(valuesArray);

    const dataObject = {
        [headers[0]]: valuesArray[0],
        [headers[1]]: valuesArray[1]
    };
  //dot notation vs bracket

   // const dataObject = {};
    //dataObject[headers[0]] = "value";
   // dataObject[headers[1]] = "something else"


    resultArray.push(dataObject);
}

console.log(resultArray);

