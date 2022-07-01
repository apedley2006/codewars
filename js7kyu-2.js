/* Count salutes

Description
There is a narrow hallway in which people can go right and left only. When two people meet in the hallway, by tradition they must salute each other. People move at the same speed left and right.

Your task is to write a function that, given a string representation of people moving in the hallway, will count the number of salutes that will occur.
Note: 2 salutes occur when people meet, one to the other and vice versa.

Input
People moving right will be represented by >; people moving left will be represented by <. An example input would be >--<--->->. The - character represents empty space, which you need not worry about.

Examples
Input: >----->-----<--<
Output: 8

Explanation: Both guys moving right will meet both guys moving left.
Hence a total of 4 meetings will occur and 8 salutes will occur.

Input: <---<--->----<
Output: 2

Explanation: Only one meeting occurs. */

function countSalutes(hallway) {
    let meet = 0
    
    for (i=0; i < hallway.length; i++){
      if (hallway[i] === '>'){
        for (j=i + 1; j < hallway.length; j++){
          if (hallway[j] === '<'){
            meet+=1
          }
        }
      }
    } 
    return meet*2
  }

  /* Doubleton number

  We will call a natural number a "doubleton number" if it contains exactly two distinct digits. For example, 23, 35, 100, 12121 are doubleton numbers, and 123 and 9980 are not.

For a given natural number n (from 1 to 1 000 000), you need to find the next doubleton number. If n itself is a doubleton, return the next bigger than n.

Examples:
doubleton(120) === 121
doubleton(1234) === 1311
doubleton(10) === 12 */

function doubleton(num){
  const checkDoubleton = (num) => [...new Set(num.toString())].length===2
 return checkDoubleton(num+1) ? num+1 : doubleton(num+1)
}  