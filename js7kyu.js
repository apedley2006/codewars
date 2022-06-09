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

