//This is my first comment
/* This is my second
comment*/
var ourName;
//var a=9;
//var b;
//b=a
var myFirstName="myFirstName";
var myLastName="myLastName";
var a=5;
var b=10;
var c="I am a";

a = a + 1;
b = b + 5;
c = c + " String!";


var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar= 10;
properCamelCase = "A String";
titleCaseOver = 9000;

let catName = "Oliver";
let catSound = "Meow!";
console.log(catName);
console.log(catSound);

const FCC = "freeCodeCamp"; 
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

const sum = 10 + 10;
console.log(sum)

const difference = 45 - 33;
console.log(difference);

const product1 = 8 * 10;
console.log(product1);

const quotient = 66 / 33;
console.log(quotient);

let myVar = 87;

myVar++;
console.log(myVar);

let myVar1 = 11;

myVar1--;
console.log(myVar);

var myDecimal=5.7;
console.log(myDecimal);

const product = 2.0 * 2.5;
console.log(product);

const quotient1 = 4.4 / 2.0;
console.log(quotient1)

const remainder = 11%3;
console.log(remainder);

let a1 = 3;
let b1 = 17;
let c1 = 12;

a1 += 12;
b1 += 9;
c1 += 7;
console.log(a1,b1,c1);

let a2 = 11;
let b2 = 9;
let c2 = 3;

a2 -= 6;
b2 -= 15;
c2 -= 1;
console.log(a2,b2,c2);

let a3 = 5;
let b3 = 12;
let c3 = 4.6;

a3 *= 5;
b3 *= 3;
c3 *= 10;
console.log(a3,b3,c3);

let a4 = 48;
let b4 = 108;
let c4 = 33;

a4 /= 12;
b4 /= 4;
c4 /= 11;
console.log(a4,b4,c4);

const myStr1 = "I am a \"double quoted\" string inside \"double quotes\"."; 
console.log(myStr1);

const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr2);

const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(myStr3);

const myStr4 = "This is the start." + ' This is the end.'; 
console.log(myStr4);

let myStr5='This is the first sentence.';
myStr5 +=' This is the second sentence.';
console.log(myStr5);

const myName3 = "freeCodeCamp";
const myStr6 = "My name is " + myName3+' and I am well!';
console.log(myStr6);

const someAdjective = "awesome!!";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;
console.log(myStr7);


let lastNameLength = 0;
const lastName2 = "Lovelace";

lastNameLength=lastName2.length
console.log(lastNameLength);

firstLetterOfLastName = lastName2[0];
console.log(firstLetterOfLastName)


let myStr8 = "Jello World";

myStr8 = "Hello World"; 
console.log(myStr8);

const thirdLetterOfLastName = lastName2[2]; 
console.log(thirdLetterOfLastName);

const lastLetterOfLastName = lastName2[lastName2.length-1];
console.log(lastLetterOfLastName)

const secondToLastLetterOfLastName = lastName2[lastName2.length-2];
console.log(secondToLastLetterOfLastName)

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = myAdjective+ " " + myNoun + " " + myVerb +" " + myAdverb;
console.log(wordBlanks);


const myArray = ["string",12];
console.log(myArray);

const myArray2 = [["string1",1],["string2",2]];
console.log(myArray2);

const myArray3 = [50, 60, 70];
var myData3= myArray3[0];
console.log(myData3);

const myArray4 = [18, 64, 99];
myArray4[0]= 45;

const myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];

  const myData5 = myArray5[2][1];
 console.log(myData5);



 const myArray6 = [["John", 23], ["cat", 2]];
 myArray6.push(["dog",3]);
 console.log(myArray6);

const myArray7 = [["John", 23], ["cat", 2]]; 
const removedFromMyArray =myArray7.pop();
console.log(removedFromMyArray);

const myArray8 = [["John", 23], ["dog", 3]];
varremovedFromMyArray2 = myArray8.shift();
console.log(removedFromMyArray);

const myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();

myArray9.unshift(["Paul", 35]);
console.log(myArray9);

const myList3 = [["chocolate",15],["cold drink",3],["coffee",1],["snacks",4],["bottle",2]];
console.log(myList3);

function reusableFunction(){
    console.log("Hi World");
  }
reusableFunction();

function functionWithArgs(a,b) {
    console.log(Number(a)+Number(b));
  }

functionWithArgs(1,3);
functionWithArgs(7,9);

function timesFive(a){
    return 5*a;
  }

console.log(timesFive(5));
timesFive(10);
timesFive(0);

let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}


function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2(); 

function myLocalScope() {

    const myVar=0;

    console.log('inside myLocalScope', myVar);
  }
myLocalScope();

console.log('outside myLocalScope', myVar); 

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

console.log(myOutfit()); 
