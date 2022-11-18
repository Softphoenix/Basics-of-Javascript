console.group('Am coming from app')

 // alert('Hi my name is azeez!') u can also write in the following way bellow

 console.log('Hi, I\'m azeez!')
 console.log('Hi, I\'m azeez!')
console.log(32) 
//  we can also asign variable using let and const note that (javascript is executed line by line
//  and from top to bottom and left to right)
let greetingText;
greetingText = 'hi I\'m azeez!!!';
console.log(greetingText);
console.log(greetingText); 
greetingText = 'my real name is azeez!!';
console.log(greetingText);
console.log(32); 

let myAge ;
myAge = 45 +
30 +
80;
console.log(myAge); 
myAge = 80;
console.log(myAge);

// arrays in js : array are very useful datatype, a very kind of value for storing relected
// data that can't br express as a list of  data 
let age = 30;
let userName = `1. azeez
2. rasheed
3. adeyemi
4. adekunle`;
alert(userName)
let hobbies = ['sports', 'cooking', 'reading', 'football', 300,150];

alert(hobbies);
alert(hobbies[3]);
prompt(hobbies[4]);

// object in js (is where multiple data are grouped together)
let jobi = { tile: 'developer', place: 'New York', salary: 50001}
// || 
let job = {
  tittle: 'developer',
  place: 'new Nigeria', 
  salary: 50001,
}; 
// we can also create variables 
let jobTittle = `developer`;
let jobPlace = 'Nigeria';
let jobSalary = 50000;
// so instead of creating much variables the we can just make use of object 

// alert(hobbies[0]);
// alert(job.tittle);
// alert(job.place);
// alert(job.salary)

// with arrays,object,numbers,and strings(we can do alot with them)
 
let adultYears;

function calculateAdultYears() {
  adultYears = age - 18; 
}

calculateAdultYears(); 
console.log(adultYears);

age = 30;
calculateAdultYears();


console.log(adultYears);

// javascript exercise 
// 1) Create three new variable:
//    -A variable that stores the name of an online course of your choice
//   - A variable that stores the price of that course
//  - A variable that stores the three main goals that you have,when taking this course

// 2) Output ("alert") the three variable values
// 3) Try "grouping" the three variables together and still output their value thereafter
// 4) Also output the second element in your "main goals" variable
// 5) Add a custom command that does the following:
//  - Use your "main goals" variable and access an element by its identifier
//  - The concrete identifier value should be dynamics / flexible
//  (i.e. the command can be executed for different identifier)
//  - The "main goal" variable should also be dynamic: The command should work
// with ANY list of values
// - The custom command should provide the accessed value (i.e. the list element)
// 6) Execute your custom command from (5) and output ("alert") the result
 

// SOLUTION

// (1)
let courseName = 'physics';
let coursePrice = 40000;
let courseGoals =['to become a Physicist', 'to become Educated','to become a good citizen of the country'];

// (2)
alert(courseName);
alert(coursePrice);
alert(courseGoals);

// (3)
// let onlineCourse = {name: 'physics', Price: 40000, Goal: `to become a Physicist
//  to become Educated
//  to become a good citizen of the country`};
// ||
let onlineCourse = {
  name:  'physics',
  price: 40000,
  goals: [ 'to become a Physicist', 'to become Educated',
   'to become a good citizen of the country' ],
}

alert(onlineCourse.name);
alert(onlineCourse.price);
alert(onlineCourse.goals);

         
// let onlineCourseName = 'physics';
// let onlinePrice = 40000;
// let onlineGoals = ['to become a Physicist', 'to become Educated', 'to become a good citizen of the country'];



// (4)
alert(onlineCourse.goals[1]);

// (5)

function getListItem (array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement; 
}

// (6)

let firstGoal = getListItem(onlineCourse.goals, 0);
alert(firstGoal)

let zksyncLabTestnet = 'Airdrop'
   let performTestnet = 'yes';
   if (performTestnet) {
    console.log('You are Eligible for Zksync_Lab Airdrop')
   } else {
     console.log('You are not eligible for  Zksync_Lab Airdrop')
   }

// function zksyncLabTestnet() {
//    let participateInTestnet = 'yes';
//    if (participateInTestnet) {
//     console.log('You will receive Airdrop') 
//    } else {
//     console.log('You will not receive Airdrop')
//    }

// }
// zksyncLabTestnet()


// to creat a function inside your object

let person = {
  name: 'Azeez', // Property
  greet() {   // Method : when we add function in an object
    alert('hello guys');
  }
};
person.greet(); 

//console class

const interestRate = 0.3;
console.log(interestRate)

// primitive data type(String, number, boolean, Undefined, null)

let name = 'azeez' // string
let agi = 30;  // number
let isApproved = true;  // boolean
let firstNames = undefined; // undefined
let selectedColor = null; // null 

// Non primitive data type || Reference data type
//(this inlude Object, Array, Funtion)

// // creating object 
let myLoveName = ['precious', 'kenny', 'fumyth', 'luba', 'latifa', 5]
console.log(myLoveName)
console.log(myLoveName[4].concat(' Azeez'))



let pupil ={
   name: 'softphoenix',
   age: 40,
   sex:' male',
}
console.log(pupil)

// We can asign new variable to the objecyt in two Notation
// 1. Dot Notation
// 2. Bracket Notation

// Dot Notation

 pupil.name = 'kenny';
 pupil.age = 15
 pupil.sex = 'male'
 console.log(pupil.name, pupil.age, pupil.sex)

 // Bracket Notation
  let selection = 'name'
  person[selection] = 'Azeez',

  console.log(selection)

  // function

  function greet(name, lastName) {
    console.log('hello ' + name + '' + lastName);
  }
  greet('john ', 'wick');
  greet('Azeez ', 'rasheed');

  // calculating a value
  function square(number, value) {
    return number * number / value;
  }
  console.log(square(4, 2));


  // split 
  let js = 'javascriptbasic'
  const charlsjava = js.split('')
  console.log(charlsjava)

  // array constructor with single parameters

  const fruits = [2];
  console.log(fruits.lenght)
  console.log(fruits[0])

// array constructor with multiple parameters
const fruit = new Array('Apple', 'Banana', 'mango');

console.log(fruit.length); 
console.log(fruits[0]);   

const arr = Array()
console.log(arr)









