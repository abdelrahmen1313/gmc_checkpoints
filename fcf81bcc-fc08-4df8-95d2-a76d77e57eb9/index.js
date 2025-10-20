/* STRINGS SECTION */

function reverseString(str) {
    return str.split('').reverse().join('');
}

//console.log(reverseString("abc"))

function countNumberOfPureChars(str) {
    let count = 0
    for (let i of str) {
        let a = i;
        console.log("current value is:", i)
        if (isNaN(Number(a))) {
            count = count + 1;
        }
    }
    console.log(`found ${count} pure characters in a string`)
    return count;

}

//console.log(countNumberOfPureChars("abc12d"))


function countNumberOfCharsInString(str) {
    console.log("STRING LENGTH ISSS:", str.length)
    return str.length;
}


//countNumberOfCharsInString("abcdef")

function capitalizeFirstLetter(sentence) {
    return sentence
        .split(" ") // convert sentence into array of words
        .map(word => word[0].toUpperCase() + word.slice(1)) // Capitalize the first letter of each word,..
        .join(" ")
}

console.log(capitalizeFirstLetter("ali is awake"));

/* ************* SECTION TWO : ARRAY FUNCTION **************************** */

// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMaxAndMin(arr) {
    console.log("finding Max and Min from MAx&Min agents");
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    //console.log("max is", max, "min is", min)
    return `max is ${max}, min is ${min}`
}

console.log(findMaxAndMin([3, 7, 1, 9, 4]));

// Sum of Array: Create a function that calculates the sum of all elements in an array.
function SumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return `sum of the given array ${arr} is ${sum}`;
}

console.log(SumOfArray([3, 7, 1, 9, 4]))

// using array.reduce 
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Filter Array: Implement a function that filters out elements from an array based on a given condition
/**
 * 
 * @param {any[]} arr 
 * @param {function : boolean} condition 
 * @returns [] -- filtered by condition
 */
function filterArray(arr, condition) {
    if (typeof condition != "function") return 'Condition must be a function'
    console.log("filtering array...");
    return arr.filter(condition);
}

/*
let cond = (item) => item > 5
let filtered = filterArray([3, 7, 1, 9, 4], cond)

console.log(filtered);
*/

// Quantum filtering process -- Today's Masterpiece

/* deprecated method -- legacy code  
/**
 * 
 * @param {string} condStr 
 * @returns {operator : strig, value : string}
 * -- parse a string condition (e,g, ">5" into {>,5})
 */
/*
function parseCondition(condStr) {
    const match = condStr.match(/(>=|<=|==|!=|>|<)\s*(.+)/);
    if (!match) throw new Error("Invalid condition format");

    const [, operator, rawValue] = match;
    const value = isNaN(rawValue) ? rawValue : Number(rawValue);
    return { operator, value };
}
    */

// our current operators, generally handling most logical operations
// could be used to avoid rendering a function from a string
/*
const operators = {
    '>': (a, b) => a > b,
    '<': (a, b) => a < b,
    '>=': (a, b) => a >= b,
    '<=': (a, b) => a <= b,
    '==': (a, b) => a == b,
    '!=': (a, b) => a != b,
};
*/

/**
 * MORE DYNAMIC APPROACH
 * @param {any} item 
 * @param {cond} cond -- accepts : string, function, boolean
 * @returns 
 * by default the function checks the boolean item === cond
 * alternatively, we can use string operators, Boolean (true | false), or direct functions
 */
function __condition(item, cond) {
  if (typeof cond === 'function') return cond(item);
  if (typeof cond === 'boolean') return Boolean(item) === cond;
  if (typeof cond === 'string') {
    try {
      const fn = new Function('x', `return ${cond};`); // using f(x) to accept functions as strings
      return fn(typeof item === 'string' ? item.toLowerCase() : item); // case insensitive for strings
    } catch (e) {
      console.error("Invalid condition:", cond);
      return false;
    }
  }
  return item === cond;
}

function customFilter(arr, cond) {
  return arr.filter(item => __condition(item, cond));
}





// testing our customFilter
console.log(customFilter(["apple", "banana", "cherry"], "x.includes('a')")); // ['apple', 'banana']

console.log(customFilter(["apple", "banana"], "x === 'banana'")); // ['banana'])
console.log(customFilter([1, 5, 10], "x > 4"));       // [5,10])
console.log(customFilter([1, 5, 10], "x > 1 && x < 10")); // [5]
/**
 * 
Using Function as a parameter is powerful but risky if you're accepting user input from unknown sources.
 In a real-world app, you'd want to sanitize or sandbox this to avoid code injection.
 */

 /*
 //_________________________________________________________________________________________\\

 // this made for fun, you can use predefined array functions they already handling this :)
 \\_________________________________________________________________________________________//
*/

// ********************** M A T H E M A T I C A L *** F U N C T I O N S **************************** //
// Factorial: Write a function to calculate the factorial of a given number.
function factorialRecursive(n) {
  if (n < 0) return "Factorial is not defined for negative numbers.";
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursive(n - 1);
}

function factorialIterative(n) {
  if (n < 0) return "Factorial is not defined for negative numbers.";
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}


// Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(num) {
if (num <= 1) return false; // Numbers <= 1 are not prime
for (let i = 2; i < num; i++) {
if (num % i === 0) return false; // Divisible by another number
}
return true; // Prime if no divisors found
}

console.log(isPrime(17)); // true
console.log(isPrime(18)); // false

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
// The Fibonacci sequence can be defined by the recurrence relation: 
// [ F(n) = F(n-1) + F(n-2) ] with initial conditions: [ F(0) = 0, \quad F(1) = 1 ]

function generateFibonacciIterative(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(generateFibonacciIterative(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

