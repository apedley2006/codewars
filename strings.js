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