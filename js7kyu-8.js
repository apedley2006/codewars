/* Ordered Count of Characters

Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]] */

const orderedCount = s =>
  Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));

  /* max diff - easy

  You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7 */

function maxDiff(list) {
  if (!list.length) return 0
  return Math.max(...list) - Math.min(...list)
}

/* Simple beads count

Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

@ @@ @ @@ @ @@ @ @@ @ @@ @

Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0. */

function countRedBeads(n) {
  //your code here
  if (n < 2) return 0
  return (n - 1) * 2
}

/* Boiled Eggs

You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?

Your Task
Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example (Input --> Output)
0 --> 0
5 --> 5
10 --> 10 */

function cookingTime(eggs) {
  // TODO
  return 5 * Math.ceil(eggs / 8)
}

/* Sum of Odd Cubed Numbers

Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers. */

function cubeOdd(arr) {

  // insert code here >.<
  const areNumbers = arr.every(element => typeof element === "number");
    if (!areNumbers) return undefined;
  
    return arr
      .map(number => number ** 3)
      .filter(number => number % 2 !== 0)
      .reduce((total, value) => total + value, 0);
  }

  /* Lost number in number sequence

  An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []). */

function findDeletedNumber(arr, mixArr) {
  // your code
  return arr.find(number => !mixArr.includes(number)) || 0
}

/* Leap Years

In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

years divisible by 4 are leap years
but years divisible by 100 are not leap years
but years divisible by 400 are leap years
Additional Notes:

Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture. */

function isLeapYear(year) {
  // TODO
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0
}

/* esreveR

Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

(the dedicated builtin(s) functionalities are deactivated) */

function reverse(array) {
  return array.reduce(function(a, b) {
    return [b].concat(a);
  }, []);
}

/* Simple remove duplicates

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

Example:
For input: [3, 4, 4, 3, 6, 3]

remove the 3 at index 0
remove the 4 at index 1
remove the 3 at index 3
Expected output: [4, 6, 3] */

function solve(arr) {
  return [...new Set(arr.reverse())].reverse()
}

/* Find the nth Digit of a Number

Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).

Note
If num is negative, ignore its sign and treat it as a positive value
If nth is not positive, return -1
Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0
Examples(num, nth --> output)
5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1 */

var findDigit = function(num, nth){
  if (nth <= 0) return -1
  let nums = "" + Math.abs(num)
  return nums.slice(nums.length - nth, nums.length - nth + 1) * 1
}

/* Gauß needs help! (Sums of a lot of numbers).

Due to another of his misbehaved, the primary school's teacher of the young Gauß, Herr J.G. Büttner, to keep the bored and unruly young schoolboy Karl Friedrich Gauss busy for a good long time, while he teaching arithmetic to his mates, assigned him the problem of adding up all the whole numbers from 1 through a given number n.

Your task is to help the young Carl Friedrich to solve this problem as quickly as you can; so, he can astonish his teacher and rescue his recreation interval.

Here's, an example:

f(n=100) // returns 5050 
It's your duty to verify that n is a valid positive integer number. If not, please, return false (None for Python, null for C#, 0 for COBOL). */

function f(n) {
  return parseInt(n) === n && n > 0 ? (n * (n + 1)) / 2 : false;
}

/* Sum of array singles

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases. */

function repeats(arr){
  //..
    return arr
      .filter((v, i, arr) => arr.indexOf(v) == arr.lastIndexOf(v))
      .reduce((a, b) => a + b, 0)
  };

  /* Simple Fun #152: Invite More Women?

  Task
King Arthur and his knights are having a New Years party. Last year Lancelot was jealous of Arthur, because Arthur had a date and Lancelot did not, and they started a duel.

To prevent this from happening again, Arthur wants to make sure that there are at least as many women as men at this year's party. He gave you a list of integers of all the party goers.

Arthur needs you to return true if he needs to invite more women or false if he is all set.

Input/Output
[input] integer array L ($a in PHP)
An array (guaranteed non-associative in PHP) representing the genders of the attendees, where -1 represents women and 1 represents men.

2 <= L.length <= 50

[output] a boolean value

true if Arthur need to invite more women, false otherwise. */

function inviteMoreWomen(L) {
  //coding and coding..
  return L.reduce((a, b) => a + b, 0) > 0;
}

/* Automorphic Number (Special Numbers Series #6)

Definition
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

Task
Given a number determine if it Automorphic or not . */

function automorphic(n){
  //your code here
  return (n * n + "").endsWith(n) ? "Automorphic" : "Not!!"
}

/* Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.
For example, given the following input array:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
your function should return Victoria, Puerto Rico. */

function getFirstPython(list) {
  // Thank you for checking out my kata :)
  let a = list.find(v => v.language === "Python")
  return a
    ? `${a.firstName}, ${a.country}`
    : "There will be no Python developers"
}

/* Spacify

Modify the spacify function so that it returns the given string with spaces inserted between each character.

spacify("hello world") // returns "h e l l o   w o r l d" */

function spacify(str) {
  // return 
  return str.split("").join(" ")
}

/* Balanced Number (Special Numbers Series #1 )

A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

The task
Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

Examples
7 ==> return "Balanced"
Explanation:
middle digit(s): 7
sum of all digits to the left of the middle digit(s) -> 0
sum of all digits to the right of the middle digit(s) -> 0
0 and 0 are equal, so it's balanced.
295591 ==> return "Not Balanced"
Explanation:
middle digit(s): 55
sum of all digits to the left of the middle digit(s) -> 11
sum of all digits to the right of the middle digit(s) -> 10
11 and 10 are not equal, so it's not balanced.
959 ==> return "Balanced"
Explanation:
middle digit(s): 5
sum of all digits to the left of the middle digit(s) -> 9
sum of all digits to the right of the middle digit(s) -> 9
9 and 9 are equal, so it's balanced.
27102983 ==> return "Not Balanced"
Explanation:
middle digit(s): 02
sum of all digits to the left of the middle digit(s) -> 10
sum of all digits to the right of the middle digit(s) -> 20
10 and 20 are not equal, so it's not balanced. */

function balancedNum(number) {
  const n = number.toString()
  const length = Math.round(n.length / 2)
  const reduce = arg => arg.split("").reduce((a, b) => a + parseFloat(b), 0)
  if (n.length < 3) return "Balanced"
  if (n.length % 2 == 0)
    return reduce(n.slice(0, length - 1)) === reduce(n.slice(length + 1))
      ? "Balanced"
      : "Not Balanced"
  return eval(n.slice(0, length - 1) + "===" + n.slice(length))
    ? "Balanced"
    : "Not Balanced"
}

/* Odd-Even String Sort

Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)

Note: 
0 is considered to be an even index. 
All input strings are valid with no spaces
input: 'CodeWars'
output 'CdWr oeas'

S[0] = 'C'
S[1] = 'o'
S[2] = 'd'
S[3] = 'e'
S[4] = 'W'
S[5] = 'a'
S[6] = 'r'
S[7] = 's'
Even indices 0, 2, 4, 6, so we have 'CdWr' as the first group
odd ones are 1, 3, 5, 7, so the second group is 'oeas'
And the final string to return is 'Cdwr oeas' */

function sortMyString(S) {
  // your code here
let even = S
  .split("")
  .filter((v, i) => i % 2 === 0)
  .join("")
let odd = S
  .split("")
  .filter((v, i) => i % 2 !== 0)
  .join("")
return even + " " + odd
}

/* Averages of numbers

#Get the averages of these numbers

Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.

Example:

Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array. */

function averages(numbers) {
  return numbers
    ? numbers
        .map((number, index, array) => (number + array[index + 1]) / 2)
        .slice(0, -1)
    : []
}

/* Filter the number

Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur. */

var filterString = function(value) {
  //Complete this function :)
  return parseInt(value.replace(/[a-z]/gi, ""))
}

/* Strong Number (Special Numbers Series #2)

Definition
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

Notes
Number passed is always Positive.
Return the result as String
Input >> Output Examples
strong_num(1) ==> return "STRONG!!!!"
Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.

strong_num(123) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .

strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.

strong_num(150) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong . */

function strong(n) {
  let arr = String(n).split("");
  
  let sum = 0;
  
  function factorial(fnNum){
    if(fnNum <= 1){
      return 1;
    }else{
      return fnNum * factorial(fnNum - 1);
    }
  }
  
  for(let i = 0; i < arr.length; i++){
    sum += factorial(arr[i]);
  }
  
  return n == sum ? "STRONG!!!!" : "Not Strong !!"; 
}

/* Help the Fruit Guy

Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase. */

function removeRotten(bagOfFruits){
  // ...
  return bagOfFruits ? bagOfFruits.map(x => x.toLowerCase().replace(/rotten/gi, "")) : []
}

/* Simple Fun #74: Growing Plant

Task
Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

Example
For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be 10.

After day 1 --> 100
After night 1 --> 90
After day 2 --> 190
After night 2 --> 180
After day 3 --> 280
After night 3 --> 270
After day 4 --> 370
After night 4 --> 360
After day 5 --> 460
After night 5 --> 450
After day 6 --> 550
After night 6 --> 540
After day 7 --> 640
After night 7 --> 630
After day 8 --> 730
After night 8 --> 720
After day 9 --> 820
After night 9 --> 810
After day 10 --> 910 
For upSpeed = 10, downSpeed = 9 and desiredHeight = 4, the output should be 1.

Because the plant reach to the desired height at day 1(10 meters).

After day 1 --> 10
Input/Output
[input] integer upSpeed

A positive integer representing the daily growth.

Constraints: 5 ≤ upSpeed ≤ 100.

[input] integer downSpeed

A positive integer representing the nightly decline.

Constraints: 2 ≤ downSpeed < upSpeed.

[input] integer desiredHeight

A positive integer representing the threshold.

Constraints: 4 ≤ desiredHeight ≤ 1000.

[output] an integer

The number of days that it will take for the plant to reach/pass desiredHeight (including the last day in the total count). */

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  //coding and coding..
  let currentHeight = 0;
  for (var i = 1; ; i++) {
    currentHeight += upSpeed
    if (currentHeight >= desiredHeight) {
      break
    } else {
      currentHeight -= downSpeed
    }
  }

  return i
}