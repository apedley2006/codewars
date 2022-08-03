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