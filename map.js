/*------------- Squares of all Numbes in an array --------------*/
const square = function (num) {
  return Math.pow(num, 2);
};

const squaresOf = function (numbers) {
  return numbers.map(square);
};

console.log(squaresOf([1, 2, 3]));

/*------------- Lengths of each string in an array ---------------*/
const lengthsOf = function (strings) {
  return strings.map(function (string) { return string.length; });
};

console.log(lengthsOf(["apple", "banana", "kiwi"]));

/*----------- All Strings into UpperCase in an array --------------*/
const uppercaseOf = function (strings) {
  return strings.map(function (string) { return string.toUpperCase(); });
};

console.log(uppercaseOf(["hello", "world"]));
console.log(uppercaseOf(["Suman", "garimiddi"]));

/*---------------- First Chars of Each string --------------------*/
const firstChar = function (string) {
  return string === '' ? '' : string.at(0);
};

const firstCharactersOf = function (strings) {
  return strings.map(firstChar);
};

console.log(firstCharactersOf(["apple", "banana", "kiwi"]));
console.log(firstCharactersOf(["a", "", "k"]));

/*---------------- Truth values of numbers ----------------------*/
const truthValuesOf = function (numbers) {
  return numbers.map(function (number) { return !(!number); });
};

console.log(truthValuesOf([0, 1, 2, 3]));
console.log(truthValuesOf([-1, 0, 2, 3]));

/*---------------- Reverse Strings of Array ----------------------*/
const reverseString = function (string) {
  return string.split("").reverse().join("");
};

const reversedStringsOf = function (strings) {
  return strings.map(reverseString);
};

console.log(reversedStringsOf(["hello", "world"]));
console.log(reversedStringsOf(["", "a"]));

/*--------- Double letters of each string in an array ---------------*/
const repeat = function (times) {
  return function (char) {
    return char.repeat(times);
  }
};

const getDoubleLetters = function (string) {
  const charsArray = string.split('');
  charsArray.pop();
  return charsArray.map(repeat(2)).join("") + string.at(-1);
};

const doubleLettersOf = function (strings) {
  return strings.map(getDoubleLetters);
};

console.log(doubleLettersOf(["cat", "dog", "bat"]));

/*---------------- Complement of booleans ----------------------*/
const negatedBooleansOf = function (booleans) {
  return booleans.map(function (boolean) { return !boolean; });
};

console.log(negatedBooleansOf([true, false, true]));

/*----------- character codes according to UTF - 16 ----------------*/
const charCodesOf = function (strings) {
  return strings.map(function (char) { return char.charCodeAt(); });
};

console.log(charCodesOf(["a", "b", "c"]));

/*-------------- Extract domain names from mails ------------------*/
const extractDomain = function (mail) {
  const indexOfAtTheRate = mail.indexOf('@');

  return mail.slice(indexOfAtTheRate + 1);
};

const domainNamesOf = function (emails) {
  return emails.map(extractDomain);
};

console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));

/*------------------ Split words into an array ---------------------*/
const splitWordsIntoArray = function (string) {
  return string.split(" ");
};

const splitWordsOf = function (strings) {
  return strings.map(splitWordsIntoArray);
};

console.log(splitWordsOf(["hello world", "goodbye moon"]));
console.log(splitWordsOf(["suman", "suman garimiddi"]));

/*------------------- Join arrays into a String ---------------------*/
const convertToString = function (array) {
  return array.join("");
};

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(convertToString);
};

console.log(joinedArraysOf([["a", "b"], ["c", "d"]]));

/*---------------------- Repeated Strings -------------------------*/
const repeatString = function (times) {
  return function (string) {
    return string.repeat(times);
  }
};

const repeatedStringsOf = function (strings) {
  return strings.map(repeatString(2));
};

console.log(repeatedStringsOf(["hi", "bye"]));

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const countVowelsOf = function (strings) { };

/*------------------ Reverse Array of Arrays -----------------------*/
const reversedArraysOf = function (arrays) {
  return arrays.map(function (array) { return array.reverse(); });
};

console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));

/*------------------ Remove vowels from strings -----------------------*/
// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const isVowel = function (char) {
  const vowels = 'AEIOUaeiou';
  return vowels.includes(char);
};

const invert = function (fn) {
  return function (char) {
    return !fn(char);
  }
};

const removeVowels = function (string) {
  const charsArray = string.split('');
  return charsArray.filter(invert(isVowel)).join('');
};

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

console.log(withoutVowelsOf(["apple", "banana", "grape"]));

/*------------ Cumulative Sums of array of arrays ------------------*/
const sumUptoCurrentElement = function (array, element) {
  const lastElement = array.at(-1);
  array.push(lastElement + element);
  return array;
};

const runningTotal = function (numbers) {
  const nums = numbers.slice(1, numbers.length);
  return nums.reduce(sumUptoCurrentElement, [numbers.at(0)]);
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map(runningTotal);
};

console.log(cumulativeSumsOf([[1, 2, 3], [4, 5, 6]]));

/*--------------- Reverse words in string --------------------------*/
const reverseWord = function (string) {
  const arrayOfWords = string.split(" ");
  return arrayOfWords.map(reverseString).join(' ');
};

const reversedWordsOf = function (strings) {
  return strings.map(reverseWord);
};

console.log(reversedWordsOf(["hello world", "goodbye moon"]));

// extract unique characters from ["apple", "banana", "grape"] => ["aple", "ban", "grap"]
// Maintain the order of their first appearance in each string
const uniqueCharactersOf = function (strings) { };

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const rangesOf = function (numbers) { };

// capitalize first letters of ["hello world", "goodbye moon"] => ["Hello World", "Goodbye Moon"]
const capitalizedFirstLettersOf = function (strings) { };

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const wordLengthsOf = function (strings) { };

// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flattenedArraysOf = function (arrays) { };

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sortedLettersOf = function (strings) { };

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrappedStringsOf = function (strings) { };

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const calculateAreas = function (rectangles) { };

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]

// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]
const percentageContributions = function (numbers) { };

// subtract the smallest number from each number in [3, 8, 1] => [2, 7, 0]
const subtractMin = function (numbers) { };

// normalize strings by the longest string length in ["cat", "elephant", "dog"] => ["cat    ", "elephant", "dog    "]
// (pad with spaces to match the longest length)
const normalizeStringLengths = function (strings) { };

// normalize strings by centering them based on the longest string length in ["cat", "elephant", "dog"] => ["  cat   ", "elephant", "  dog   "]
// (pad with spaces to justify to the center)
const centerJustifyStrings = function (strings) { };

// scale all numbers proportionally so the largest number becomes 100 in [20, 50, 80] => [25, 62.5, 100]
const scaleToMax100 = function (numbers) { };

// map each number to the difference between it and the average of the array in [10, 20, 30] => [-10, 0, 10]
const differencesFromMean = function (numbers) { };

// map each string to its frequency in ["apple", "banana", "apple", "apple", "banana"] => [3, 2, 3, 3, 2]
const stringFrequencies = function (strings) { };

// mark the largest number in an array as true, others as false in [1, 3, 2] => [false, true, false]
const markLargestNumber = function (numbers) { };

// sort strings by length first, and then alphabetically if lengths are equal in ["cat", "banana", "apple", "kiwi"] => ["cat", "kiwi", "apple", "banana"]
// Steps: Sort by length, then by lexicographical order.
const sortByLengthAndAlphabet = function (strings) { };

// find the difference between the max and min values, and then normalize the array based on this range in [10, 20, 30, 5] => [0.25, 0.75, 1, 0]
// Steps: Find min, max, calculate range, then normalize each value.
const normalizeByRange = function (numbers) { };

// calculate the percentage of each number relative to the total sum of the array, and then sort the percentages in descending order in [100, 200, 50, 25] => [50, 25, 12.5, 12.5]
// Steps: Calculate sum, find percentage of each number, sort in descending order.
const percentageOfTotalSorted = function (numbers) { };