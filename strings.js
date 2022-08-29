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
