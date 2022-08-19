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

/* Generating Markdowns

Your friend has recently started using Codewars to learn more advanced coding. They have just created their first kata, and they want to write a proper description for it, using codeblocks, images and hyperlinks.

However, they are struggling to understand how to use Markdown formatting properly, so they decide to ask for your help, by having you write a program that will generate some of the syntaxes for you.

Markdown syntaxes
links: [displayed text](url address)
images: ![replacement message](url address)
codeblocks: we'll use multiline codeblocks like the following
```language
code
```
Task
Your task is to create a function called generate_markdowns or generateMarkdowns. It will take three parameters:

markdown - The type of markdown to return. It can be "link", "img" or "code".
text - The text,message or code to display
url_or_language or urlOrLanguage - gives either the url address to use or the name of the language for the codeblock.
Examples
generate_markdowns('link','Github Codewars','https://github.com/codewars')
# returns: "[Github Codewars](https://github.com/codewars)" */

function generateMarkdowns(markdown,text,urlOrLanguage) {
  // write your code here
  
  if (markdown === 'img'){
    return `![${text}](${urlOrLanguage})`
  }
  if (markdown === 'link'){
    return `[${text}](${urlOrLanguage})`
  }
  
  return `\`\`\`${urlOrLanguage}\n${text}\n\`\`\``
};

/* Grid index

You are given an n by n ( square ) grid of characters, for example:

[['m', 'y', 'e'], 
 ['x', 'a', 'm'], 
 ['p', 'l', 'e']]
You are also given a list of integers as input, for example:

[1, 3, 5, 8]
You have to find the characters in these indexes of the grid if you think of the indexes as:

[[1, 2, 3], 
 [4, 5, 6], 
 [7, 8, 9]]
Remember that the indexes start from one and not zero.

Then you output a string like this:

"meal"
All inputs will be valid. */

function gridIndex(grid, indices) {
  let str = ""
  grid = "0" + grid.map((v) => v.join``).join``
  indices.map((v) => (str += grid[v]))
  return str
}

/* Right in the Centre

Right in the Center
This is inspired by one of Nick Parlante's exercises on the CodingBat online code practice tool.

Given a sequence of characters, does "abc" appear in the CENTER of the sequence?

The sequence of characters could contain more than one "abc".

To define CENTER, the number of characters in the sequence to the left and right of the "abc" (which is in the middle) must differ by at most one.

If it is in the CENTER, return True. Otherwise, return False.

Write a function as the solution for this problem. This kata looks simple, but it might not be easy.

Example
is_in_middle("AAabcBB")  ->  True
is_in_middle("AabcBB")   ->  True
is_in_middle("AabcBBB")  ->  False */

function isInMiddle(seq) {
  // your goes below 
  return seq.length > 4 ? isInMiddle(seq.slice(1, -1)) : seq.includes('abc')
}

/* Bases Everywhere

Uh oh, Someone at the office has dropped all these sequences on the floor and forgotten to label them with their correct bases.

We have to fix this before the boss gets back or we're all going to be fired!

This is what your years of coding have been leading up to, now is your time to shine!

Task
You will have to create a function which takes in a sequence of numbers in random order and you will have to return the correct base of those numbers.

The base is the number of unique digits. For example, a base 10 number can have 10 unique digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 and a base 2 number (Binary) can have 2 unique digits: 0 and 1.

Constraints
The sequence will always be 10 numbers long and we know that the base is going to be between 2 and 10 inclusive so no need to worry about any letters. When sorted, the sequence is made up of consecutive numbers.

Examples
[ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]     -->  10
[ "1", "2", "3", "4", "5", "6", "10", "11", "12", "13" ]  -->   7 */

function baseFinder(seq){
  //Good luck!
  return new Set(seq.join``).size
}

/* Mirror, mirror, on the wall...

Too long, didn't read
You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, then the next greatest, and so on...

More info
The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

Examples
[]  -->  []
[1]  -->  [1]
[2, 1]  -->  [1, 2, 1]
[1, 3, 2]  -->  [1, 2, 3, 2, 1]
[-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]
[-3, 15, 8, -1, 7, -1] --> [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3] */

function mirror(data) {
  /* go ahead */
  let sortA = data.slice().sort((a, b) => a - b)
  let sortB = data.slice().sort((a, b) => b - a).slice(1)
  return [...sortA, ...sortB]
}

/* Over The Road

Task
You've just moved into a perfectly straight street with exactly n identical houses on either side of the road. Naturally, you would like to find out the house number of the people on the other side of the street. The street looks something like this:

Street
1|   |6
3|   |4
5|   |2
Evens increase on the right; odds decrease on the left. House numbers start at 1 and increase without gaps. When n = 3, 1 is opposite 6, 3 opposite 4, and 5 opposite 2.

Example (address, n --> output)
Given your house number address and length of street n, give the house number on the opposite side of the street.

1, 3 --> 6
3, 3 --> 4
2, 3 --> 5
3, 5 --> 8
Note about errors
If you are timing out, running out of memory, or get any kind of "error", read on. Both n and address could get upto 500 billion with over 200 random tests. If you try to store the addresses of 500 billion houses in a list then you will run out of memory and the tests will crash. This is not a kata problem so please don't post an issue. Similarly if the tests don't complete within 12 seconds then you also fail.

To solve this, you need to think of a way to do the kata without making massive lists or huge for loops. Read the discourse for some inspiration :) */

function overTheRoad(address, n){
  //code here
  return n * 2 - address + 1
}

/* 16+18=214

For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers. */

function add(num1, num2) {
  num1 = num1.toString()
  num2 = num2.toString()
  let arr = []
  const l1 = num1.length-1
  const l2 = num2.length-1
  for (let i=0;;i++){
    if (num1[l1-i]&&num2[l2-i]){ 
      arr.push(parseInt(num1[l1-i])+parseInt(num2[l2-i]))
    }
    else if (num1[l1-i]){
      arr.push(num1[l1-i])
    }
    else if (num2[l2-i]){
      arr.push(num2[l2-i])
    } else {
      break
    }
  }
  return arr.reverse().join('')*1
}

/* Negative Connotation

You will be given a string with sets of characters, (i.e. words), seperated by between one and three spaces (inclusive).

Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").

Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.

"A big brown fox caught a bad rabbit" => True/true
"Xylophones can obtain Xenon." => False/false */

const pos = 'abcdefghijklm'
    let posCount = 0
    let negCount = 0
    const strSplited = str.toLowerCase().split(` `)
    for (let i = 0; i < str.length; i++) {
        if (strSplited[i] && strSplited[i][0]) {
            if (pos.includes(strSplited[i][0])) {
                posCount += 1
            } else {
                negCount += 1
            }
        }

    }
    return posCount >= negCount

    /* Turkish Numbers, 0-99

    Your Task
Complete the function to convert an integer into a string of the Turkish name.

input will always be an integer 0-99;
output should always be lower case.
Background
Forming the Turkish names for the numbers 0-99 is very straightforward:

units (0-9) and tens (10, 20, 30, etc.) each have their own unique name;
all other numbers are simply [tens] + [unit], like twenty one in English.
Unlike English, Turkish does not have "teen"-suffixed numbers; e.g. 13 would be directly translated as "ten three" rather than "thirteen" in English.

Turkish names of units and tens are as follows:

0 = sıfır
1 = bir
2 = iki
3 = üç
4 = dört
5 = beş
6 = altı
7 = yedi
8 = sekiz
9 = dokuz

10 = on
20 = yirmi
30 = otuz
40 = kırk
50 = elli
60 = altmış
70 = yetmiş
80 = seksen
90 = doksan
Examples
 1  -->  "bir"
13  -->  "on üç"
27  -->  "yirmi yedi"
38  -->  "otuz sekiz"
77  -->  "yetmiş yedi"
94  -->  "doksan dört" */

const getTurkishNumber = (num) => {
	if (num===0) return "sıfır"
  const dict1 = {
    1:"bir",
    2:"iki",
    3:"üç",
    4:"dört",
    5:"beş",
    6:"altı",
    7:"yedi",
    8:"sekiz",
    9:"dokuz",
  }
    const dict2 = {
    10:"on",
    20:"yirmi",
    30:"otuz",
    40:"kırk",
    50:"elli",
    60:"altmış",
    70:"yetmiş",
    80:"seksen",
    90:"doksan",
  }
    const arr = []
    const decades = 0;
    for (let i=9;i>0;i--){
      if (num-i*10>=0){
        arr.push(dict2[i*10])
        num-=i*10
        break
      }
    }
      for (let i=9;i>0;i--){
      if (num-i>=0){
        arr.push(dict1[i])
        num-=i
        break
      }
    }
  return arr.join` `
} 

/* Graceful Tipping

Adding tip to a restaurant bill in a graceful way can be tricky, thats why you need make a function for it.

The function will receive the restaurant bill (always a positive number) as an argument. You need to 1) add at least 15% in tip, 2) round that number up to an elegant value and 3) return it.

What is an elegant number? It depends on the magnitude of the number to be rounded. Numbers below 10 should simply be rounded to whole numbers. Numbers 10 and above should be rounded like this:

10 - 99.99... ---> Round to number divisible by 5

100 - 999.99... ---> Round to number divisible by 50

1000 - 9999.99... ---> Round to number divisible by 500

And so on...

Good luck!

Examples
 1  -->    2
 7  -->    9
12  -->   15
86  -->  100 */

function gracefulTipping(bill) {
  // your code here
  bill = bill * 1.15
  const mult = Math.ceil(5 * Math.pow(10, Math.floor(Math.log10(bill)) - 1));
  return Math.ceil(bill / mult) * mult
}

/* Mr Martingale

You're in the casino, playing Roulette, going for the "1-18" bets only and desperate to beat the house and so you want to test how effective the Martingale strategy is.

You will be given a starting cash balance and an array of binary digits to represent a win (1) or a loss (0). Return your balance after playing all rounds.

The Martingale strategy

You start with a stake of 100 dollars. If you lose a round, you lose the stake placed on that round and you double the stake for your next bet. When you win, you win 100% of the stake and revert back to staking 100 dollars on your next bet.

Example
martingale(1000, [1, 1, 0, 0, 1]) === 1300
Explanation:

you win your 1st round: gain $100, balance = 1100
you win the 2nd round: gain $100, balance = 1200
you lose the 3rd round: lose $100 dollars, balance = 1100
double stake for 4th round and lose: staked $200, lose $200, balance = 900
double stake for 5th round and win: staked $400, won $400, balance = 1300
Note: Your balance is allowed to go below 0. */

function martingale(bank, outcomes) {
  //beat the house here...
  let mult = 1
  outcomes.map( win =>{
    if (win){
      bank += 100*mult
      mult = 1
    } else {
      bank -= 100*mult
      mult*=2
    }
  })
  return bank
}