/* Find the first non-consecutive number

Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null2.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too! */

function firstNonConsecutive (arr) {
    let results = arr.find((num, index) => num !== index + arr[0])
    return Number.isInteger(results) ? results : null
  }

  /* Duck Duck Goose

  The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

Example:

duck_duck_goose([a, b, c, d], 1) should return a.name
duck_duck_goose([a, b, c, d], 5) should return a.name
duck_duck_goose([a, b, c, d], 4) should return d.name
// PHP only
duck_duck_goose([$a, $b, $c, $d], 1); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 5); // => $a["name"]
duck_duck_goose([$a, $b, $c, $d], 4); // => $d["name"] */

function duckDuckGoose(players, goose) {
  // ...
  return players[(goose-1)%players.length].name
}

/* Beginner - Lost Without a Map

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

function maps(x){
  return x.map( i => i *2)
}

/* Beginner - Reduce but Grow

Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

function grow(x){
  return x.reduce((i, a) => i * a)
}

/* I love you, a little , a lot, passionately ... not at all

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0. */

const phrases = [
  "not at all",
  "I love you",
  "a little",
  "a lot",
  "passionately",
  "madly"
]

const howMuchILoveYou = n => phrases[n % 6]