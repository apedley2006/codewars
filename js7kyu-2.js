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

/* Shifter words

You probably know that some characters written on a piece of paper, after turning this sheet 180 degrees, can be read, although sometimes in a different way. So, uppercase letters "H", "I", "N", "O", "S", "X", "Z" after rotation are not changed, the letter "M" becomes a "W", and Vice versa, the letter "W" becomes a "M".

We will call a word "shifter" if it consists only of letters "H", "I", "N", "O", "S", "X", "Z", "M" and "W". After turning the sheet, this word can also be read, although in a different way. So, the word "WOW "turns into the word "MOM". On the other hand, the word "HOME" is not a shifter.

Find the number of unique shifter words in the input string (without duplicates). All shifters to be counted, even if they are paired (like "MOM" and "WOW"). String contains only uppercase letters.

Examples
shifter("SOS IN THE HOME") === 2 // shifter words are "SOS" and "IN"
shifter("WHO IS SHIFTER AND WHO IS NO") === 3 // shifter words are "WHO", "IS", "NO"
shifter("TASK") === 0 // no shifter words
shifter("") === 0 // no shifter words in empty string */

const shifter = s => new Set(s.match(/\b[hinosxzmw]+\b/ig) || []).size

/* Strange mathematics
In a certain kingdom, strange mathematics is taught at school. Its main difference from ordinary mathematics is that the numbers in it are not ordered in ascending order, but lexicographically, as in a dictionary (first by the first digit, then, if the first digit is equal, by the second, and so on). In addition, we do not consider an infinite set of natural numbers, but only the first n numbers.

So, for example, if n = 11, then the numbers in strange mathematics are ordered as follows:

1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9.

Help your students to learn this science: write a function that receives two integer numbers: n (total amount of numbers in strange mathematics) and k (number from sequence) and returns the location of a given number k in the order defined in strange mathematics.

For example, if n = 11 and k = 2, the function should return 4 as the answer.

Input: 1 <= n <= 100 000 , 1 <= k <= n.

Output: position of the number k in sequence of the first n natural numbers in lexicographic order. Numbering starts with 1.

Examples:
strangeMath(11, 2) === 4
strangeMath(15, 5) === 11
strangeMath(15, 15) === 7 */

function strangeMath(n, k){
  const arr = Array.from(Array(n),(_,i)=>i+1).sort((a,b)=>a.toString().localeCompare(b.toString()))
  return arr.indexOf(k) + 1
}

/* Game Hit the target

Hit the target
given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
There will be only 1 arrow '>' and 1 target 'x'
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
Examples:
given matrix 4x4:
[ [' ', ' ', ' ', ' '], [' ', ' ', ' ', ' '], --> return true [' ', '>', ' ', 'x'], [' ', ' ', ' ', ' '] ]
given matrix 4x4:
[ [' ', ' ', ' ', ' '], [' ', '>', ' ', ' '], --> return false [' ', ' ', ' ', 'x'], [' ', ' ', ' ', ' '] ]
given matrix 4x4:
[ [' ', ' ', ' ', ' '], [' ', 'x', '>', ' '], --> return false [' ', '', ' ', ' '], [' ', ' ', ' ', ' '] ]

In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
Happy hacking as they say! */

const solution = mtrx => {
  // code here 
   
   for(let i = 0; i < mtrx.length; i++){
     if(mtrx[i].includes('x') && mtrx[i].includes('>')){
       return mtrx[i].indexOf('>') < mtrx[i].indexOf('x')
     }
   }
   return false
 }

 /* Ce*s*r*d Strings

 My PC got infected by a strange virus. It only infects my text files and replaces random letters by *, li*e th*s (like this).

Fortunately, I discovered that the virus hides my censored letters inside root directory.

It will be very tedious to recover all these files manually, so your goal is to implement uncensor function that does the hard work automatically.

Examples
uncensor("*h*s *s v*ry *tr*ng*", "Tiiesae") ➜ "This is very strange"

uncensor("A**Z*N*", "MAIG") ➜ "AMAZING"

uncensor("xyz", "") ➜ "xyz"
Notes
Expect all discovered letters to be given in the correct order.
Discovered letters will match the number of censored ones.
Any character can be censored. */

function uncensor(infected, discovered) {
  let i = -1;
  return infected.replace(/\*/g,(v=>{
    i+=1
    return discovered[i]
  }))
}

/* Four/Seven

Four Seven
Simple kata, simple rules: your function should accept the inputs 4 and 7. If 4 is entered, the function should return 7. If 7 is entered, the function should return 4. Anything else entered as input should return 0. There's only one catch, your function cannot include if statements, switch statements, or the ternary operator (or the eval function due to the fact that you can get around the if requirement using it).

There are some very simple ways of answering this problem, but I encourage you to try and be as creative as possible.

Good Luck! */

function fourSeven(n){
  // Your Code Here
  while (n == 4) return 7
  while (n == 7) return 4
  return 0
}

/* Consecutive Differences
Given a list of integers, find the positive difference between each consecutive pair of numbers, and put this into a new list of differences. Then, find the differences between consecutive pairs in this new list, and repeat until the list has a length of 1. Then, return the single value.

The list will only contain integers, and will not be empty.

For example:

differences([1, 2, 3]) => [1, 1] => [0] -> 0
differences([1, 5, 2, 7, 8, 9, 0]) => [4, 3, 5, 1, 1, 9] => [1, 2, 4, 0, 8] => .. => 1
differences([2, 3, 1]) => [1, 2] => [1] => 1 */

function differences(a) {
  while (a.length > 1){
    for (let i = 0; i < a.length; i++){
      a[i] = Math.abs(a[i] - a[i+1])
    }
    a.pop()
  }
  return a[0]
}

/* Dice Rotation

There are any number of dice, and the input array contains the number on the dice's face up.

A dice is 6 faced.

Calculate the total number of minimum rotations of dice, to make all faces the same.

1 will require only one rotation to have 2, 3, 4 and 5 face up, but would require minimum two rotations to make it the face 6, as 6 is the opposite side of 1.

The opposite side of 2 is 5 and 3 is 4.

For example:

dieArray = {1,1,6}, Answer = 2. Rotate 6 two times to get 1.

dieArray = {1,2,3}, Answer = 2. Rotate 1 and 2 and make them 3 (or make them all 1 or 2 as all three would require the same number of rotations.

dieArray = {3, 3, 3}, Answer = 0.

dieArray = {1,6,2,3}, Answer = 3. Rotate 1, 6 and 3 to make them all 2. */

function rotations(dieArray){
  let d = {1:6,2:5,3:4,4:3,5:2,6:1}
  return dieArray.length ? Math.min(...[...new Set(dieArray)].map(e=>dieArray.reduce((a,c)=>a+(e===c?0:d[c]===e?2:1),0))) : 0
}

/* Separate basic types
Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties for each of types presented in input. Each property should contain an array of corresponding values.

keep order of values like in input array
if type is not presented in input, no corresponding property are expected
So, for this input:

['a', 1, 2, false, 'b']
expected output is:

{
  number: [1, 2],
  string: ['a', 'b'],
  boolean: [false]
} */

const separateTypes = input => input.reduce((a,b)=>{
  const type = typeof b;
  return {...a,[type]:input.filter(v=>typeof v === type)}
},{})

function separateTypes(input) {
  const dic = {};
  const arr = [...new Set(input.map(el => typeof el))]
  arr.map(el => dic[el] = input.filter(e=> typeof e === el))
  return dic;
}

/* ⚠️Fusion Chamber Shutdown⚠️

A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

1. Hydrogen reacts with Oxygen   = H2O
2. Carbon   reacts with Oxygen   = CO2
3. Carbon   reacts with Hydrogen = CH4
FOR EXAMPLE:
(C,H,O) = (45,11,100)
return no. of water, carbon dioxide and methane molecules
Output should be like:
(5,45,0) */

function burner(c, h, o) {
  let water = 0
  let co2 = 0
  let methane = 0
  while (h >= 2 && o >= 1) {
    h -= 2
    o -= 1
    water += 1
  }
  while (c >= 1 && o >= 2){
    c -= 1
    o -= 2
    co2 += 1
  }
  while (c >= 1 && h >= 4){
    c -= 1
    h -= 4
    methane += 1
  }
  return [water, co2, methane];
}

/* Loop Array

Write a function loopArr that loops array in a specified direction by some number of steps.

By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

Function should accept three arguments:

array - non-empty array of elements of any type;
direction - 'left' or 'right' - tells how to loop array;
steps - number of steps to loop array (less or equal to array size);
Examples:

loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
should produce result: [87, 45, 8, 8, 1, 5]

loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
should produce result: [8, 8, 1, 5, 87, 45] */

function loopArr(arr, direction, steps) {
  // if statement for each direction, then use steps to push and pop
    
    if (direction === 'left'){
      return arr.slice(steps).concat(arr.slice(0,steps))
    }
    return arr.slice(-steps).concat(arr.slice(0,-steps))
  }

  /* Keyboard handler

  Overview
Have you ever wondered how a user interface handles key presses?

So today you have the opportunity to create it.

Task:
The keyboard handler is a function which receives three parameters as input:

Key - the entered character on the keyboard.

isCaps (or is_caps) - boolean variable responsible for the enabled 'Caps Lock'. (by default false)

isShift (or is_shift) - boolean variable which is responsible for whether 'Shift' is pressed. (by default false)

Your task to write a function that returns the entered character.

Requirements for obtaining the 'key' variable:
Alphabetical characters must be a lowercase (e.x. 'a', not 'A')
It must be a character (e.x '2', not 2 or not [1,2,3])
It must be of unit length (e.x. 'a', not 'abc')
If the value does not satisfy the condition, return 'KeyError'

For example:

handler('a', true) // should return 'A' (because Caps-Lock)
handler('1', true) // should return '1' (because Сaps-Lock doesn't work here)
handler('a', false, true) // should return 'A' (because Shift)
handler('1', false, true) // should return '!'

handler('')  // should return 'KeyError'
handler('A') // should return 'KeyError'
handler( 3 ) // should return 'KeyError'
handler('abc') // should return 'KeyError'
In this kata we use en-US QWERTY layout. (The characters we are working with are shown on a white background) */

const U = [..."~!@#$%^&*()_+{}|:\"<>? "]
const L = [..."`1234567890-=[]\\;',./ "]
  
const handler = (k,c,s) => /^[a-z]$/.test(k) ? s ^ c ? k.toUpperCase() : k : L.includes(k) ? s ? U[L.indexOf(k)] : k : "KeyError"

/* Red Knight

Red Knight is chasing two pawns. Which pawn will be caught, and where?

Input / Output
Input will be two integers:

N / n (Ruby) vertical position of Red Knight (0 or 1).
P / p (Ruby) horizontal position of two pawns (between 2 and 1000000).
Output has to be a tuple (python, haskell, Rust, prolog, C#), an array (javascript, ruby), an object (java), or a structure (C) with:

"Black" or "White" - which pawn was caught
Where it was caught (horizontal position)
Example
Input = 0, 4
Output = ["White", 8] */

function redKnight(N, P) {
  return [(N + P) % 2 ? 'Black' : 'White', 2 * P]
}

/* Duplicate sandwich

Task
In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

Your task is to output a list of everything inbetween both occurrences of this element in the list.

Examples:
[0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
[0, 0] => []
[true, false, true] => [false]
"example" => "xampl"
Notes
All elements will be the same datatype.
All used elements will be primitive. */

function duplicateSandwich(a) {
  for (let i =0; i < a.length; i++){
    const first = a.indexOf(a[i])
    const last = a.lastIndexOf(a[i])
    
    if (first === last) continue
    else return a.slice(first+1,last)
  }
}
