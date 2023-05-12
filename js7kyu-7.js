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

  Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

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