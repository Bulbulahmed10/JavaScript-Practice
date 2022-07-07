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

function sum(m, n) {
  let result = 0
  for(let i = m; i<= n; i++) {
  result += i;
  }
  return result
 }
 console.log(sum(1, 10)); 

