console.log(`1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
     a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
          > Do not use numbers to reference the last element, find it programmatically.
          > ages[7] - ages[0] is not allowed!
     b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
     c. Use a loop to iterate through the array and calculate the average age.
     `)

// answer
var Ages = [3,9,23,64,2,8,28,93]
console.log(`Original array:`)
console.log('[' + Ages + ']')

//part a vvv
let ageSub = (a,b) => {
     let result = a - b;
     return result
}

var m1 = Ages[Ages.length - 1]
var m2 = Ages[0]
console.log(`First Age in array subtracted from Last Age in array is equal to:`)
console.log(ageSub(m1,m2) + `

`)

//part b vvv
Ages.push(ageSub(m1,m2));
var m1 = Ages[Ages.length - 1];

console.log(`New array:`)
console.log('[' + Ages + ']')
console.log(`First Age in array subtracted from Last Age in array is equal to:`)
console.log(ageSub(m1,m2))

//part c vvv
averageFun = (arr) => {
     var sum = 0
     for (let i = 0; i < arr.length; i++) {
         var average = (sum += arr[i])/(arr.length)
     }
     return average;
}
console.log(`
The average age is`)
console.log(averageFun(Ages))


////////////////////////////////////////////////////////////////////////////////


console.log(`


2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
     a. Use a loop to iterate through the array and calculate the average number of letters per name.
     b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
`)

// answer
var names = ['Sam','Tommy','Tim', 'Sally', 'Buck', 'Bob',]

// part a vvv
avLePeNa = (arr) => {
     for (let i = 0; i < arr.length; i++) {
          arrLength = arr[i].length
          var avgsu = 0
          avgsu += arrLength
     }
     return avgsu
}                                               
console.log(`
The average number of letters per name is:`)
console.log(avLePeNa(names));


// part b vvv
let string = '';

for (let i = 0; i < names.length; i++) {
     string+= `${names[i]} `;
}

console.log(`
The "names" array concatenated with spaces:
${string}`)


////////////////////////////////////////////////////////////////////////////////


console.log(`


3. How do you access the last element of any array?
`)

//answer
console.log(`
In order to access the last element of any array, I write ".length - 1" in the brackets of calling an array, following the name of the array

e.g.)`)
let myExArray = [0,1,2,3,4,5,6,7,8,9,]
console.log(`My example array is: 
[${myExArray}]`)
console.log(`The last element in this array is: 
${myExArray[myExArray.length - 1]}`)




////////////////////////////////////////////////////////////////////////////////

console.log(`


4. How do you access the first element of any array?
`)

//answer
console.log(`
In order to access the first element of any array, I call the array and put "0" in for the element I want. "0" will always be the first element in an array.

e.g.)`)
let newExArray = ['uno','dos','tres','quatro','cinco',]
console.log(`My example array is: 
[${newExArray}]`)
console.log(`The first element in this array is: 
${newExArray[0]}`)


////////////////////////////////////////////////////////////////////////////////

console.log(`


5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
     For example:
     let names = ["Kelly", "Sam", "Kate"];    // starting with this array
     let nameLengths = [5, 3, 4];             // create a new array
`)

//answer
console.log(`
The "names" array is:
[${names}]`)

let nameLengths ='';
for (let i = 0; i < names.length; i++) {
     nameLengths += `${names[i].length}`
}
Array.from(nameLengths)


let oneString = '';
for (let i = 0; i < nameLengths.length; i++) {
     oneString+= `${nameLengths[i]}, `
}
console.log(`
The "nameLengths" array is:
[${oneString}]`)


////////////////////////////////////////////////////////////////////////////////

console.log(`


6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
`)

//answer

nameAdd = (anArr) => {
     var sum = 0
     for (let i = 0; i < anArr.length; i++) {
          toNumbers = (x,base) => {
               const parsed = parseInt(x, base);
            return parsed;
          }
          sum += toNumbers(anArr[i],10)
     }
     return sum
}
console.log(`
The sum of all the name lengths is:`)
console.log(nameAdd(nameLengths))


////////////////////////////////////////////////////////////////////////////////

console.log(`


7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
`)

const a = 'Hello';
var b = 3;
let anArray = [];
let stringOne = '';
together = (word,n) => {
     for (let i = 0; i < n; i++) {
          anArray.splice(0,0,word)
     }
     for (let x = 0; x < anArray.length; x++) {
          stringOne += anArray[x]
     }
     return stringOne
}
console.log(together(a,b))


////////////////////////////////////////////////////////////////////////////////

console.log(`


8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
`)

//answer
let first = '`${firstName}'
let last = '${lastName}`'
nameFun = (firstName,lastName) => `${firstName} ${lastName}`
console.log(`
My written function that produces a full name:
nameFun = (firstName,lastName) => ${first} ${last}`)


////////////////////////////////////////////////////////////////////////////////

console.log(`


9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
`)

//answer
numArr = [1,2,3,]
console.log(`
First array:
[${numArr}]`)

booFun = (arr) => {
     let summies = 0
     for (let i = 0; i < arr.length; i++) {
          summies += arr[i]
      }
     if (summies > 100) {
          result = true
     } else {
          result = false
     }
     return result
}
console.log(`Function result:
${booFun(numArr)}`)

numArr.push(94)
console.log(`
Second array:
[${numArr}]`)
console.log(`Function result:
${booFun(numArr)}`)

numArr.splice(3,1,100)
console.log(`
Third array:
[${numArr}]`)
console.log(`Function result:
${booFun(numArr)}`)


////////////////////////////////////////////////////////////////////////////////

console.log(`


10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
`)

//answer

avSuOfNu = (arr) => {
     let summies = 0
     for (let i = 0; i < arr.length; i++) {
          result = (summies += arr[i])/(arr.length)
     }
     return result
}
numArr.splice(3,1,5,8,88,34,51,69,56,43,16,)
console.log(`
The number array is:
[${numArr}]`)
console.log(`The average of the numbers in array is:
${avSuOfNu(numArr)}`)


////////////////////////////////////////////////////////////////////////////////

console.log(`


11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
`)

//answer
compareTwoFun = (arr1,arr2) => {
     let summies = 0
     for (let i = 0; i < arr1.length; i++) {
          arr1Result = (summies += arr1[i])/(arr1.length)
     }
     console.log(`\nThe first array is:\n${arr1}\nThe average of the numbers in this array is:\n${arr1Result}`)
     let summs = 0
     for (let i = 0; i < arr2.length; i++) {
          arr2Result = (summs += arr2[i])/(arr2.length)
     }
     console.log(`\nThe second array is:\n${arr2}\nThe average of the numbers in this array is:\n${arr2Result}`)
     if (arr1Result > arr2Result) {
          result = true
     } else {
          result = false
     }
     return result
}
firstArray = [1,4,8,10,50,32,40]
secondArray = [2,5,9,40,20,9,16]

console.log(`
Function Result:
${compareTwoFun(firstArray,secondArray)}`)

secondArray.push(100,200,50,70)
console.log(`
Function Result:
${compareTwoFun(firstArray,secondArray)}`)


////////////////////////////////////////////////////////////////////////////////

console.log(`


12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
`)

//answer
willBuyDrink = (isHotOutside,moneyInPocket) => {
     if (isHotOutside === true && moneyInPocket > 10.50) {
          buyDrink = true
     } else {
          buyDrink = false
     }
     return buyDrink
}
let money = 11
let hot = true
console.log(`
Person buys drink is:
${willBuyDrink(hot,money)}`)

money = 5.25
hot = true
console.log(`Person buys drink is:
${willBuyDrink(hot,money)}`)

money = 2000000
hot = false
console.log(`Person buys drink is:
${willBuyDrink(hot,money)}`)


////////////////////////////////////////////////////////////////////////////////

console.log(`


13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
`)

//answer
//I'm going to make 4 different MarioKart characters

pinkGoldPeach = {
     name: `Pink Gold Peach`,
     weight: 4.50,
     acceleration: 3.25,
     speed: 4.25,
}

shyGuy = {
     name: `Shy Guy`,
     weight: 2.75,
     acceleration: 4.00,
     speed: 3.00,
}

dryBones = {
     name: `Dry Bones`,
     weight: 2.00,
     acceleration: 4.25,
     speed: 2.50,
}

rosalina = {
     name: `Rosalina`,
     weight: 3.75,
     acceleration: 3.25,
     speed: 4.00,
}

//Now I'll make 4 different MarioKart bikes

masterCycle = {
     name: `Master Cycle`,
     weight: 0.00,
     acceleration: -0.50,
     speed: 0.25,
}

wildWiggler = {
     name: `Wild Wiggler`,
     weight: -0.25,
     acceleration: 0.25,
     speed: -0.25,
}

jetBike = {
     name: `Jet Bike`,
     weight: -0.25,
     acceleration: -0.50,
     speed: 0.25,
}

boneRattler = {
     name: `Bone Rattler`,
     weight: 0.50,
     acceleration: -0.75,
     speed: 0.25,
}

//I'm going to make each player an object with their choices
characArr = [pinkGoldPeach,shyGuy,dryBones,rosalina]
bikeArr = [masterCycle,wildWiggler,jetBike,boneRattler]

playerOne = {
     character: characArr[2],
     car: bikeArr[2],
}
console.log(playerOne)

playerTwo = {
     character: characArr[1],
     car: bikeArr[3],
}
console.log(playerTwo)

//I'll make a function to compare the players point values
marioKart = (p1,p2) => {
     //I need a section that calculates the 3 main stats
     p1w = p1.character.weight + p1.car.weight
     p1a = p1.character.acceleration + p1.car.acceleration
     p1s = p1.character.speed + p1.car.speed
     p2w = p2.character.weight + p2.car.weight
     p2a = p2.character.acceleration + p2.car.acceleration
     p2s = p2.character.speed + p2.car.speed
     //Now I need point values to compare at the end
     p1p = 0
     p2p = 0
     //I need to give a player a point for each comparision they win
     if (p1w < p2w) {
          p1p += 1
     } else {
          p2p += 1
     }
     if (p1a > p2a) {
          p1p += 1
     } else {
          p2p += 1
     }
     if (p1s > p2s) {
          p1p += 1
     } else {
          p2p += 1
     }
     //I need to print the result of the function
     if (p1p > p2p) {
          console.log(`Player 1 wins!`)
     } else {
          console.log(`Player 2 wins!`)
     }
}
//Lastly, I need to call the function
marioKart(playerOne,playerTwo)


//This function will take the character and car each player chooses and calculate the overal stats by finding the sum in each stat category. This function then compares the two players by category, awarding one point to the winner of each catergory before finaling comparing the total point values. The player with the highest point value wins.