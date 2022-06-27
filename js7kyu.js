/* What is the flag?

What is the flag?

The flag is hidden in the string variable MESS

The flag is in the format FLAG{CAPITAL-LETTERS-WITH-HYPHEN}

The flag couldn't be found from the string literal right away... but You can indeed see it somehow!

A magic number 16 might help... but how should it be used? */

const FLAG = "dflaskjf; klcqwjer9qieiqucwepirom9028905839045809ds8gf[90g8sd[fh8f-[gh8-09wer0=t]mxcvnmz.xvchku9erpiot789-348tipahjrgfkhzxvxmb,mncxmh6t3q90485ut9rsqklgfjkj#Q$YTEWOPJGPOEDSJC)$%#@^*@$%690uiodrj;lstj3;wpiot8ujdfpgioja90-8-0cx8v#KL%J,,.345.3.l0-0----0000-00---0-----0..-.-.--.....--.-.-.----5345..9.........4.....3.........456...4.........3.....2.........7.....3424.......................564...544......4...5.8...9.....6...3.7.........79345.9.565.....1...1.3...7.....1...1.33452.......................013..89345......4......9......732......8........6......8........9......9........846..78654......................698............8...3............6.....098345.....73............6...6............186...........................79843..9879878....6.......7.......8.......5.......8.......6.......9.......9.....12387.....7............................786982..........8........45623..77833...........9...............109841....................345.....723....5...1...6...2...6...3....5......78234.....45....1...8...7...8...2...3....873....4...5...........................4.....7..........1...5............9.4...93459......1...............1...............1............................4.....3..345634..3...7...3........7.5....3455......1.....3.........2.....867843....1............................5321452............1...............1...............1....743745.....1...............1............................2345754..5.....44........6.....354335....3.....13........4.....42........7542345................4....2...533....52...3.....6....2.3..9.....98...1..7.6.....6....7...88.....5....6....9...964....................------0--0-=0-=-0-00000000-00-0-0-000000,0,,0000jasdkl;jferiotupvn23c014985901c79840p72x812m598723189057m2190857mx98012479812798m1407395813479857m2149857198x0579814320758937981982347384957983g"

let res = []
for(let i = 0; i < FLAG.length; i+=16)
res.push(FLAG.slice(i, i+16))

// Put the flag in this variable
let flag = `FLAG{IS-IT-EASY-YET-FUN}`

/* Turn with a Compass

You have an 8-wind compass, like this:

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

Examples
"S",  180  -->  "N"
"SE", -45  -->  "E"
"W",  495  -->  "NE" */

function direction(facing, turn){
    const arr = "N NE E SE S SW W NW".split(" ");
    return arr[(arr.indexOf(facing) + Math.floor(turn / 45) + 1080) % 8];
  }

  /* Odd or Even? Determine that!

  Task
Given a number N, determine if the sum of N consecutive numbers is odd or even.

If the sum is definitely an odd number, return Odd.
If the sum is definitely an even number, return Even.
If the sum can be either odd or even ( depending on which first number you choose ), return Either.
Examples
Odd_or_Even(1) should return Either, because the sum can be odd or even.
Odd_or_Even(6) should return Odd, because 6 consecutive numbers contain 3 odd and 3 even numbers, so their sum is always odd.
Odd_or_Even(8) should return Even, because 8 consecutive numbers contain 4 odd and 4 even numbers, so their sum is always even.
Note
const ODD = "Odd";
const EVEN = "Even";
const EITHER = "Either"; */

function oddOrEven(n) {
  if (n !== 1){
    if (n % 2 === 1) {
      return "Either"
    }
    if (n/2 % 2 === 0) {
      return "Even"
    } else {
      return "Odd"
    }
  }
  return "Either"  
}

/* Mountains of Hoiyama

In the planet named Hoiyama, scientists are trying to find the weights of the mountains.
They managed to find the weights of some mountains.
But calculating them manually takes a really long time.
That's why they hired you to develop an algorithm and easily calculate the weights of the mountains.
Your function has only one parameter which is the width of the mountain and you need to return the weight of that mountain.
The widths of the mountains are only odd numbers.
They gave you some information about calculating the weight of a mountain.
Examine the information given below and develop a solution accordingly.
width = 3

          3          ->  3
        1,2,1        ->  4
                      +___
               weight:   7
width = 5

          5          ->  5
        3,4,3        -> 10
      1,2,3,2,1      ->  9
                      +___
               weight:  24
width = 7

          7          ->  7
        5,6,5        -> 16
      3,4,5,4,3      -> 19
    1,2,3,4,3,2,1    -> 16
                      +___
               weight:  58
width = 9

          9          ->  9
        7,8,7        -> 22
      5,6,7,6,5      -> 29
    3,4,5,6,5,4,3    -> 30
  1,2,3,4,5,4,3,2,1  -> 25
                      +___
               weight: 115
width = 17

                   17                  ->  17
                15,16,15               ->  46
             13,14,15,14,13            ->  69
          11,12,13,14,13,12,11         ->  86
        9,10,11,12,13,12,11,10,9       ->  97
       7,8,9,10,11,12,11,10,9,8,7      -> 102
      5,6,7,8,9,10,11,10,9,8,7,6,5     -> 101
     3,4,5,6,7,8,9,10,9,8,7,6,5,4,3    ->  94
    1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1  ->  81
                                        +____
                                  weight: 693 */

function mountainsOfHoiyama (width) {
  const num = Math.floor(width/2);
  return (num + 1) * (2 * num ** 2 + 3 * num + 2)/2;
  }

/* Vowel Count

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. */

function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

/* Barista problem

You are a barista at a big cafeteria. Normally there are a lot of baristas, but your boss runs a contest and he told you that, if you could handle all the orders with only one coffee machine in such a way that the sum of all the waiting times of the customers is the smallest possible, he will give you a substantial raise.

So you are the only barista today, and you only have one coffee machine that can brew one coffee at a time.
People start giving you their orders.
Let's not think about the time you need to write down their orders, but you need 2 additional minutes to clean the coffee machine after each coffee you make.

Now you have a list coffees of the orders and you write down next to each of the orders the time you need to brew each one of those cups of coffee.

Task:

Given a list of the times you need to brew each coffee, return the minimum total waiting time.
If you get it right, you will get that raise your boss promised you!

Note that:

It is possible to receive no orders. (It's a free day :), maybe the next day your boss will start giving you some orders himself, you probably don't want that :) )

You can only brew one coffee at a time.

Since you have one coffee machine, you have to wait for it to brew the current coffee before you can move on to the next one.

Ignore the time you need to serve the coffee and the time you need to take the orders and write down the time you need to make each one of them.

If you have three customers with times [4,3,2], the first customer is going to wait 4 minutes for his coffee, the second customer is going to wait 4 minutes (the time needed for the first customer to get his coffee), another 2 minutes (the time needed to clean the machine) and 3 more minutes (the time you need to brew his coffee), so in total 9 minutes. The third customer, by the same logic, is about to wait 9 minutes (for the first two customers) + 2 more minutes(cleaning) + 2 minutes (his coffee brewing time). This order of brewing the coffee will end up in a total waiting time of 26 minutes, but note that this may not be the minimum time needed. This time depends on the order you choose to brew the cups of coffee.

The order in which you brew the coffee is totally up to you.

Examples:

coffees = [3,2,5,10,9]  ->  85
coffees = [20,5]        ->  32
coffees = [4,3,2]       ->  22 */

function barista(coffees){
  coffees.sort((a,b)=> a-b)
  return coffees.reduce((acc, cookTime, i) => acc + cookTime * (coffees.length-i) + 2*i, 0)
}

/* Boxlines

Boxlines
Given a X*Y*Z box built by arranging 1*1*1 unit boxes, write a function f(X,Y,Z) that returns the number of edges (hence, boxlines) of length 1 (both inside and outside of the box)

Notes
Adjacent unit boxes share the same edges, so a 2*1*1 box will have 20 edges, not 24 edges
X,Y and Z are strictly positive, and can go as large as 2^16 - 1
This is my first kata, so I hope every one will enjoy it <3 */

function f(x,y,z){
  //TODO:Your code here
  return x * (y + 1) * (z + 1) +
         y * (z + 1) * (x + 1) +
         z * (x + 1) * (y + 1)
}

/* Closure Counter

Closure Counter
Define the function counter that returns a function that returns an increasing value.
The first value should be 1.
You're going to have to use closures.
Example:
const newCounter = counter();
newCounter() // 1
newCounter() // 2
Closure:
A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures */

const counter = (n = 0) => () => (n += 1);

/* Last Survivor

You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.

Example:

let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
The given string will never be empty.
The length of the array is always one less than the length of the string.
All numbers are valid.
There can be duplicate letters and numbers. */

function lastSurvivor(letters, coords) {
  const arr = [...letters]
  for(let i=0;i<coords.length;i++){
    arr.splice(coords[i],1)
  }
  return arr.join``
}

/* I'm everywhere!

Overview
Many people know that Apple uses the letter "i" in almost all of its devices to emphasize its personality.

And so John, a programmer at Apple, was given the task of making a program that would add that letter to every word. Let's help him do it, too.

Task:
Your task is to make a function that takes the value of word and returns it with an "i" at the beginning of the word. For example we get the word "Phone", so we must return "iPhone". But we have a few rules:

The word should not begin with the letter "I", for example Inspire.
The number of vowels should not be greater than or equal to the number of consonants, for example East or Peace. ("y" is considered a consonant)
The first letter should not be lowercase, for example road.
If the word does not meet the rules, we return "Invalid word". */

function i(word) {
  //.. 
  if(!word) return 'Invalid word'
  const fLetter = word.slice(0,1)
  const nVowels = word.slice().split('').filter(v=>/[aioeu]/i.test(v)).length
  if(fLetter === 'I') return 'Invalid word'
  if(fLetter === fLetter.toLowerCase()) return 'Invalid word'
  if(nVowels >= word.length/2) return 'Invalid word'
  return "i"+word
}

/* Alphabetical Grid

Task:
You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....

Examples:
grid(4)

a b c d
b c d e
c d e f
d e f g
grid(10)

a b c d e f g h i j
b c d e f g h i j k
c d e f g h i j k l
d e f g h i j k l m
e f g h i j k l m n
f g h i j k l m n o
g h i j k l m n o p
h i j k l m n o p q
i j k l m n o p q r
j k l m n o p q r s
Notes:
After "z" comes "a"
If function receive N < 0 should return:
null */

function grid(N) {
  //...
  const arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',]
  const res = [];
  if(N<0) return null;
  if(N===1) return 'a'
  for(let i=0;i<N;i++){
    let str = ''
    for(let j=0;j<N;j++){
      str+=(arr[(j+i)%26]+' ')
    }
    res.push(str.trim())
  }
  return res.join('\n')
}

/* Previous multiple of three

Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.

Examples
1      => null
25     => null
36     => 36
1244   => 12
952406 => 9 */

const prevMultOfThree = n => {
  //your solution
  let str = n.toString().split('').reverse('').join('')
  for(let i=0;i<str.length;i++){
    if(str.slice(i).split('').reverse('').join('')*1%3===0){
      return str.slice(i).split('').reverse('').join('')*1
    }
  }
  return null
}

/* Find the Squares
Problem
Complete the function that takes an odd integer (0 < n < 1000000) which is the difference between two consecutive perfect squares, and return these squares as a string in the format "bigger-smaller"

Examples
9  -->  "25-16"
5  -->  "9-4"
7  -->  "16-9" */

const findSquares = num => {
  let ceil = Math.ceil(num / 2)
  let floor = Math.floor(num / 2)
  let max = ceil**2
  let min = floor**2
  return `${max}-${min}`;
};

/* What a "Classy" Song
Your job is to create a class called Song.

A new Song will take two parameters, title and artist.

const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

mountMoose.title => 'Mount Moose'
mountMoose.artist => 'The Snazzy Moose'
You will also have to create an instance method named howMany() (or how_many()).

The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".

Example
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1 (or test 1)
mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
// These are all new since they are the first listeners.

// day 2
mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
// Luke and Amanda are new, john already listened to it the previous day
Also if the same person listened to it more than once a day it should only count them once.

Example
const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');

// day 1
mountMoose.howMany(['John', 'joHN', 'carl']); => 2
Good luck! */

class Song{
  constructor(title, artist){
    this.title = title;
    this.artist = artist;
    this.listener = new Set()
  };
  howMany(people){
    let oldSize = this.listener.size;
    people.map(p => this.listener.add(p.toLowerCase()));
    return this.listener.size - oldSize;
  }
}

/* Harvest Festival

Four parameters will be given. The four parameters are:

seed (string) - determines the type of flowers generated by the plant.
water (integer) - each unit of water extends the portion of stem between the flowers. It also gives how many times the stems + flower clusters should be repeated
fert (integer) - each unit of fertilizer increases the amount of flowers, grouped in clusters
temp (integer) - if the temperature given is in the range of 20°C and 30°C, the plant grows normally, otherwise, all the flowers die except for one flower at the end of the stem.
Given the above parameters, your task is to return a string representing the plant.

Examples
plant("@", 3, 3, 25) => "---@@@---@@@---@@@"
# Water gives the length of the stem portions between flowers
# Water also gives the total number of segments(number of times flowers + stems should be repeated)
# Fertilizer gives the length of the flower clusters.
# Temperature is in the range of 20°C and 30°C

plant("$", 4, 2, 30) => "----$$----$$----$$----$$"

plant("&", 1, 5, 20) => "-&&&&&"

plant("^", 3, 3, 35) => "---------^"
# The temperature is not in the correct range, so all flowers die, except the last one at the end.
# The stem is not affected by the temperature
Notes
Edge conditions will not be tested, meaning parameters of water or fertilizer or temperature being zero. This will not be tested. The parameters will always be valid (no zero).
The temperature bounds are inclusive (20 and 30 will be included as 21, 22, 23, 24...)
Happy Coding! */

function plant(seed, water, fert, temp){
  //your code here
   let str = ''
   
   for(let i=0;i<water;i++){
     str += '-'.repeat(water)
     if(temp>=20&&temp<=30){
       str += seed.repeat(fert)
     }
   }
 
   if(temp<20||temp>30){
     return str+=seed
   }
   
   return str
 }

 /* Max sum between two negatives
 You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements, or if there is no such sum: -1 for Python, JavaScript and COBOL, Nothing for Haskell.

No negative element should be present in this sum.

Example:

[4, -1, 6, -2, 3, 5, -7, 7] -> 8
     ^      ^         ^
Not 14, because -2 is between -1 and -7, and not 6 but 8, because 8 is bigger. */

function maxSumBetweenTwoNegatives(a) {
  const onlyNeg = a.filter(v=>v<0)
  if(onlyNeg.length<2){
    return -1
  }
  const arr = []
  for (let i=0;i<a.length;i++){
    if(a[i]<0){
      let count = 0
      for(let j=i+1;j<a.length;j++){
        if(a[j]<0){
          arr.push(count)
          break
        }
        else {
          count += a[j]
        }
      }
    }
  }
  return Math.max(...arr)
}