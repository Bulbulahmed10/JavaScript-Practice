/*
 Day 01 ----->>> Write a program to    print all even numbers from 1 to N. 
*/

// for (let i = 0; i <= 100; i++) {
//   if(i % 2 == 1) {
//     console.log(i)
//   }
// }

/*
 Day 02 ----->>> Write a program to find the sum of numbers from N to M.
*/

//---------------Solve 1 ---------------//

// function sum(n, m) {
//   return ((n + m) * (m - n + 1)) / 2;
// }
// sum(5, 40)

//---------------Solve 2 ---------------//

// function sum(m, n) {
//   let result = 0
//   for(let i = m; i<= n; i++) {
//   result += i;
//   }
//   return result
//  }
//  console.log(sum(1, 10)); 

/*
 Day 03 ----->>> Write a function that takes base and height of a triangle and return its area.
*/

// function areaOfTriangle(base, height) {
//   var area =(base * height) / 2;
//   var result = `triangle base is ${base} meter and height is ${height} meter. Area of triangle is ${area} meter square.`
//   console.log(result)
// }
// areaOfTriangle(7, 4);

/*
 Day 04 ----->>> Write a function that takes a word and returns the new word without including the first two characters.
*/

// function stringRemove(str) {
// return str.substring(2)
// }
// console.log(stringRemove('hello'))


/*
 Day 05 ----->>> Write a function that takes an array and return the first and last elements as a new array.
*/
// let myArr = [5, 6, 3, 9, 4, 7]
// function newArr(arr) {
//   let newArr = [];
//   let firstArr = arr[0];
//   let secondArr = arr[arr.length - 1];
//   return newArr += [[firstArr], [secondArr]]
// }

// console.log(newArr(myArr))

/*
 Day 06 ----->>> Write a function that takes an array and return a reverse array.

 Note: The function cannot change the main array, and you cannot use any array methods.
*/

//---------------Solve 1 ---------------//

// let myArr = [6, 8, 3, 9, 5, 3, 35, 9, 5];
// function arrReverse(arr) {
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[arr.length - i - 1];
//   }
//   return newArr;
// }


// console.log(arrReverse(myArr))
// console.log(myArr)

//---------------Solve 2 ---------------//

let exampleArray = [1, 3, 6, 4, 8, 4, 7];
let finalArray = [];

function reverseArrFunc(inputArray) {
  for (let i = inputArray.length -1; i>= 0; i--) {
    finalArray[finalArray.length] = (inputArray[i]);
  }
}

reverseArrFunc(exampleArray);
console.log(' reverse array : ', finalArray)
console.log(' main array : ', exampleArray)
