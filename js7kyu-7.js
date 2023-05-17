/* Triangular Treasure

Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0 */

// Return the nth triangular number
function triangular( n ) {
    let sum = 0
    for (let i = 1; i <= n; i++) {
      sum += i * 1
    }
    return sum
  }

/* Reverse a Number

iven a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1 */

reverseNumber = n =>
  (n > 0 ? 1 : -1) *
  Math.abs(n)
    .toString()
    .split("")
    .reverse()
    .join("")

/* Power of two

Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2. */

function isPowerOfTwo(n){
  //.. should return true or false ..
  return Number.isInteger(Math.log2(n))
}

/* Minimize Sum Of Array (Array Series #1)

Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74 */

function minSum(arr) {
  // your code here
  const sorted = arr.sort((a, b) => a - b)
  let sum = 0
  for (let i = 0; i < arr.length / 2; i++) {
    sum += sorted[i] * sorted[sorted.length - 1 - i]
  }
  return sum
}