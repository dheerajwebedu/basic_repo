// Print num from 1 to 10

// for loop

for (let i = 1; i <= 10; i++) {  //1. initialization 2. Condition 3. iteration
    console.log(i)
}


// print all odd numbers from 1 to 10

console.log("Odd Numbers from 1 to 10")

for (let i = 1; i <= 10; i = i + 2) {
    console.log(i)
}


console.log("Even Numbers from 1 to 10")

for (let i = 2; i <= 10; i = i + 2) {
    console.log(i)
}


// Print a table of 5 upto 50

let n = 5
let step = 1

console.log("Table of 5")
for (let i = 5; i <= 50; i = i + 5) {
    console.log(`${n}*${step++} = ${i}`)
}


// While loop

console.log("While Loop")

// Ex: 1
let a = 1; //initialization

while(a<=10){ //condition
    console.log(`The current value of a is ${a} through while loop.`);
    a++; //iteration
}


// Ex: 2
let a1 = 5; //initialization

while(a1<=50){ //condition
    console.log(` ${a1}`);
    a1+=5 //iteration
}

// FOR OF LOOP

let name = "DHIRAJ";

for(let a of name){
    console.log(a)
}

// Print num from 1 to 36
for (let a = 1; a <=36; a++){
    console.log(a)
}

//  Print num from 1 to 21
console.log("odd number from 1 to 21")
for (let i = 1; i <=21; i = i+2){
    console.log(i)
}

// Even Number
console.log("Even Numbers From 1 to 20")
for (let i =2; i <=20; i = i+2){
    console.log(i)
}

// Exp :-1 Even Numbers
console.log("Even Numbers 20 to 50")
for (let i = 21; i <=50; i=i+2){
    console.log(i)
}
// Print the odd numbers
console.log("Odd numbers from 21 to 41")
for (let i = 21; i <=41; i=i+2){
    console.log(i)
}

