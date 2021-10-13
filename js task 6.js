

//Exercise 1

let darthVader = {
    "allegiance":"empire",
    "weapon":"ligtsabre",
    "sith":true
};
console.log(darthVader);


//Exercise 2

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? `false`:`true`}`);


//Exercise 3

let myArray = [
    `hello`,
    `all`
]

console.log(myArray.length);

myArray.push(`I`);
myArray.push(`am`);
myArray.push(`Kunal`);

console.log(myArray.length);

myArray.shift();


for(i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}

