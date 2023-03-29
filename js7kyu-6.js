/* Fix string case

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase. */

function solve(s){
    //..
  let up = s.split("").filter(v => v.match(/[A-Z]/)).length
  let down = s.split("").filter(v => v.match(/[a-z]/)).length
  return down >= up ? s.toLowerCase() : s.toUpperCase()
}

/* Largest 5 digit number in a series

In the following 6 digit number:

283910
91 is the greatest sequence of 2 consecutive digits.

In the following 10 digit number:

1234567890
67890 is the greatest sequence of 5 consecutive digits.

Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits. */

function solution(digits){
  let answer = 0;

  for (let i = 0; i < digits.length; i++) {
    let number = digits.substr(i, 5) //each loop iteration pulls the next 5 digits into a substring
    if (Number(number) > answer) {
      //convert to number and compare against answer
      answer = Number(number)
    }
  }
  return answer
}

/* Alternate capitalization

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces. */

function capitalize(s){
  return [s.split('').map((v,i)=>i%2==0?v.toUpperCase():v.toLowerCase()).join(''),
          s.split('').map((v,i)=>i%2!==0?v.toUpperCase():v.toLowerCase()).join('')];
};