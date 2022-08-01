/* Stones on the Table

There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

Examples:

"RGBRGBRGGB"   => 1
"RGGRGBBRGRR"  => 3
"RRRRGGGGBBBB" => 9 */

function solve(stones) {
    let count = 0
    for (i = 0; i < stones.length; i++){
      if (stones[i] === stones[i+1]){
        count += 1
      }
    } return count
  }

/* Consecutive items

You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr. */

function consecutive(arr, a, b) {
  // Your code here...
  const indexA = arr.indexOf(a)
  const indexB = arr.indexOf(b)
  return Math.abs(indexA-indexB) === 1
}