/* Returning Strings

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?". */

function greet(name){
    //your code here
    return `Hello, ${name} how are you doing today?`
  }

/* Is the string uppercase?

Task
Create a method to see whether the string is ALL CAPS.

Examples (input -> output)
"c" -> False
"C" -> True
"hello I AM DONALD" -> False
"HELLO I AM DONALD" -> True
"ACSKLDFJSgSKLDFJSKLDFJ" -> False
"ACSKLDFJSGSKLDFJSKLDFJ" -> True */

String.prototype.isUpperCase = function() {
    // your code here
    
    return this.toString() === this.toUpperCase()
  }

/* Who is going to pay for the wall?

Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is" */

function whoIsPaying(name){
  //your code here
  return  name.length <= 2 ? [name] : [name, name.slice(0, 2)]
}

/* ES6 string addition

It is easy to join two strings together like this string1 + string2.

Another way to get the desired result would be with string1.concat(string2)

ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string. */

function joinStrings(string1, string2){
  // code here
 return `${string1} ${string2}`
}

/* Alan Partridge II - Apple Turnover

Backstory

As a treat, I'll let you read part of the script from a classic 'I'm Alan Partridge episode:

Lynn: Alan, there’s that teacher chap.
Alan: Michael, if he hits me, will you hit him first?
Michael: No, he’s a customer. I cannot hit customers. I’ve been told. I’ll go and get some stock.
Alan: Yeah, chicken stock.
Phil: Hello Alan.
Alan: Lynn, hand me an apple pie. And remove yourself from the theatre of conflict.
Lynn: What do you mean?
Alan: Go and stand by the yakults. The temperature inside this apple turnover is 1,000 degrees. If I squeeze it, a jet of molten Bramley apple is going to squirt out. Could go your way, could go mine. Either way, one of us is going down.
Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.

Task
Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

Note: Input will either be a positive integer (or a string for untyped languages). */

function apple(x){
  if (x**2 > 1000){
    return "It's hotter than the sun!!"
  } else {
    return "Help yourself to a honeycomb Yorkie for the glovebox."
  }
}

/* Simple Comparison?

Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number(). */

function add(a, b){
	// code here
  return +a == +b
}

/* Well of Ideas - Easy Version

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'. */

function well(x){
  const count = x.reduce((s, v) => s + (v == 'good'), 0)
  return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!'
}

/* The Wide-Mouthed frog!

The wide-mouth frog is particularly interested in the eating habits of other creatures.

He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

When he meets the alligator, it then makes a tiny mouth.

Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide */

function mouthSize(animal) {
  // code here
  animal = animal.toLowerCase()
  if (animal == "alligator"){
    return "small"
  } else {
    return "wide"
  }
}

