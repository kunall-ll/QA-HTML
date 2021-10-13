//Task 5

//Ex 1

let strictA = true;
let strictB = 1;
console.log(strictA == strictB); 
//true
console.log(strictA === strictB);
//false

//Ex 2

console.log(strictA != strictB);
//false
console.log(strictA !== strictB);
//true

//Exercise 3

let age = 30;

if ( age >= 18 && age <= 65 ){
    console.log(`age is in the acceptable age range`);
} else if (age < 18){
    console.log(`underage`);
} else {
    console.log(`age is over the age limit`)
}


