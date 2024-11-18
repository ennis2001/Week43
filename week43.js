// Hello.
// This is a set of exercises.
// The idea is to practice a few things at a time.
// You do this by writing your answer after a task is given (see the example).
// Use the concepts from our sylabus. 

// DO NOT change the provided code unless the task specifically says to do so.

/* -----------------------------------------------------------------------------
    Task: Example
    Write code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    create a function that "draws" a tree of a given height.
    Example the following is a tree of height 5

           5        *
           4       ***
           3      *****
           2     *******
           1        x
*/
console.log("Task: A");

function drawTree(height) {
    for (let i = 1; i <= height; i++) {
        let spaces = " ".repeat(height - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
    console.log(" ".repeat(height - 1) + "x");
}

/* Prints rows accordingly to the number in the bracket, (7) will print 7 rows or stars. */ 
drawTree(7);

/* -----------------------------------------------------------------------------
    Task: B

    Write a function that "draws" an arrow of a given size.
    Example: This is an arrow of size 3.

    *
    * *
    * * *
    * *
    * 
*/
console.log("Task: B");

function drawArrow(size) {
    for (let i = 1; i <= size; i++) {
        let row = "* ".repeat(i).trim();
        console.log(row)
    }
    for (let i = size - 1; i >= 1; i--) {
        let row = "* ".repeat(i).trim();
        console.log(row);
    }
}

drawArrow(5);

/* -----------------------------------------------------------------------------
    Task: C
    Write a function that draws a box of n by m dimensions. Take into acount the diffrence in aspectratio.

    Example: This is a aproximatly a 2 by 2 box. 
    +--------+
    |        |
    |        |
    +--------+
*/
console.log("Task: C");

function drawBox(n, m) {
    console.log("+" + "-".repeat(m - 2) + "+");
    for (let i = 0; i < n - 2; i++) {
        console.log("|" + " ".repeat(m - 2) + "|");
    }

    if (n > 1) {
        console.log("+" + "-".repeat(m - 2) + "+")
    }
}

/* Prints Box with a 2:1 aspect ratio */
drawBox(4, 8)


/* -----------------------------------------------------------------------------
    Task: D
    Write a function that returns true if a word is a Heterogram.   
*/
console.log("Task: D");

function heterogram(word) {
    word =word.toLowerCase();
    let seenLetters = new Set();
    for (let char of word) {
        if (seenLetters.has(char)) {
            return false;
        }
        seenLetters.add(char);
    }
    return true;
}

/* Prints False as firetruck is not a heterogram. */
console.log(heterogram("firetruck"));

/* Prints True as special is a heterogram. */
console.log(heterogram("special"));

/* Prints True as computer is a heterogram. */
console.log(heterogram("computer"));

/* -----------------------------------------------------------------------------
    Task: E
    Write a function that returns true if two words are Anagrams.
*/
console.log("Task: E");

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

/* Prints True as solve and loves are anagrams. */
console.log(anagram("solve", "loves"));

/* Prints True as evil and vile are anagrams. */
console.log(anagram("evil", "vile"));

/* Prints False as evil and vile are not anagrams. */
console.log(anagram("hello", "world"));