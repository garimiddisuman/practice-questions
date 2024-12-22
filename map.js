/*------------ 1) Squares of all Numbes in an array --------------*/
const power = function (exponent) {
  return function (base) {
    return Math.pow(base, exponent);
  };
};

const squaresOf = function (numbers) {
  return numbers.map(power(2));
};

console.log(squaresOf([1, 2, 3]));

/*---------- 2) Lengths of each string in an array ---------------*/
const lengthsOf = function (strings) {
  return strings.map(function (string) { return string.length; });
};

console.log(lengthsOf(["apple", "banana", "kiwi"]));

/*-------- 3) All Strings into UpperCase in an array --------------*/
const uppercaseOf = function (strings) {
  return strings.map(function (string) { return string.toUpperCase(); });
};

console.log(uppercaseOf(["hello", "world"]));
console.log(uppercaseOf(["Suman", "garimiddi"]));

/*------------- 4) First Chars of Each string --------------------*/
const firstChar = function (string) {
  return string === '' ? '' : string.at(0);
};

const firstCharactersOf = function (strings) {
  return strings.map(firstChar);
};

console.log(firstCharactersOf(["apple", "banana", "kiwi"]));
console.log(firstCharactersOf(["a", "", "k"]));

/*------------- 5) Truth values of numbers ----------------------*/
const truthValuesOf = function (numbers) {
  return numbers.map(function (number) { return !(!number); });
};

console.log(truthValuesOf([0, 1, 2, 3]));
console.log(truthValuesOf([-1, 0, 2, 3]));

/*------------- 6) Reverse Strings of Array ----------------------*/
const reverseString = function (string) {
  if (string === '') {
    return '';
  }

  return string.slice(-1) + reverseString(string.slice(0, -1));
};

const reversedStringsOf = function (strings) {
  return strings.map(reverseString);
};

console.log(reversedStringsOf(["hello", "world"]));
console.log(reversedStringsOf(["", "a"]));

/*------- 7) Double letters of each string in an array ---------------*/
const repeat = function (times) {
  return function (char) {
    return char.repeat(times);
  };
};

const doubleEveryChar = function (string) {
  return [...string].map((char) => char.repeat(2)).join('');
};

const doubleLettersOf = function (strings) {
  return strings.map(doubleEveryChar);
};

console.log(doubleLettersOf(["cat", "dog", "bat"]));

/*------------- 8) Complement of booleans ----------------------*/
const negatedBooleansOf = function (booleans) {
  return booleans.map(function (boolean) { return !boolean; });
};

console.log(negatedBooleansOf([true, false, true]));

/*-------- 9) character codes according to UTF - 16 ----------------*/
const charCodesOf = function (strings) {
  return strings.map(function (char) { return char.charCodeAt(); });
};

console.log(charCodesOf(["a", "b", "c"]));

/*----------- 10) Extract domain names from mails ------------------*/
const extractDomain = function (mail) {
  const indexOfAtTheRate = mail.indexOf('@');

  return mail.slice(indexOfAtTheRate + 1);
};

const domainNamesOf = function (emails) {
  return emails.map(extractDomain);
};

console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));

/*------------ 11) Split words into an array ---------------------*/
const splitWordsIntoArray = function (string) {
  return string.split(" ");
};

const splitWordsOf = function (strings) {
  return strings.map(splitWordsIntoArray);
};

console.log(splitWordsOf(["hello world", "goodbye moon"]));
console.log(splitWordsOf(["suman", "suman garimiddi"]));

/*-------------- 12) Join arrays into a String ---------------------*/
const convertToString = function (array) {
  return array.join("");
};

const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map(convertToString);
};

console.log(joinedArraysOf([["a", "b"], ["c", "d"]]));

/*---------------- 13) Repeated Strings -------------------------*/
const repeatString = function (times) {
  return function (string) {
    return string.repeat(times);
  };
};

const repeatedStringsOf = function (strings) {
  return strings.map(repeatString(2));
};

console.log(repeatedStringsOf(["hi", "bye"]));

/*--------- 14) count vowels in --------------------*/
const isVowel = function (char) {
  const vowels = 'AEIOUaeiou';
  return vowels.includes(char);
};

const vowelsCount = function (string) {
  return string.split('').reduce(function (count, char) {
    if (isVowel(char)) {
      return count + 1;
    }
    return count;
  }, 0);
};

const countVowelsOf = function (strings) {
  return strings.map(vowelsCount);
};

console.log(countVowelsOf(["apple", "banana", "grape"]));

/*--------------- 15) Reverse Array of Arrays -----------------------*/
const reversedArraysOf = function (arrays) {
  return arrays.map(function (array) { return array.reverse(); });
};

console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));

/*-------------- 16) Remove vowels from strings -----------------------*/
// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const invert = function (fn) {
  return function (char) {
    return !fn(char);
  };
};

const removeVowels = function (string) {
  const charsArray = string.split('');
  return charsArray.filter(invert(isVowel)).join('');
};

const withoutVowelsOf = function (strings) {
  return strings.map(removeVowels);
};

console.log(withoutVowelsOf(["apple", "banana", "grape"]));

/*--------- 17) Cumulative Sums of array of arrays ------------------*/
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

/*------------ 18) Reverse words in string --------------------------*/
const reverseWord = function (string) {
  const arrayOfWords = string.split(" ");
  return arrayOfWords.map(reverseString).join(' ');
};

const reversedWordsOf = function (strings) {
  return strings.map(reverseWord);
};

console.log(reversedWordsOf(["hello world", "goodbye moon"]));

/*-------- 19) Extract Unique Characters in string --------------*/
// -->  Maintain the order of their first appearance in each string
const isUnique = function (uniqueChars, char) {
  if (!uniqueChars.includes(char)) {
    uniqueChars.push(char);
  }

  return uniqueChars;
};

const extractUniqueChars = function (string) {
  const arrayOfChars = string.split('');
  return arrayOfChars.reduce(isUnique, []).join('');
};

const uniqueCharactersOf = function (strings) {
  return strings.map(extractUniqueChars);
};

console.log(uniqueCharactersOf(["apple", "banana", "grape"]));

/*----------- 20) generate ranges from ------------------------*/
const range = function (num) {
  return Array(num).fill(0).map(function (_, i) { return i; });
};

const rangesOf = function (numbers) {
  return numbers.map(range);
};

console.log(rangesOf([3, 5, 2]));

/*----------- 21) generate ranges from ------------------------*/
const firstCharCapital = function (string) {
  return string.at(0).toUpperCase() + string.slice(1);
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(firstCharCapital);
};

console.log(capitalizedFirstLettersOf(["hello world", "goodbye moon"]));

/*----------- 21) find Word Lengths ------------------------*/
const findwordLength = function (string) {
  const arrayOfWords = string.split(' ');
  return arrayOfWords.map(function (word) { return word.length; });
};

const wordLengthsOf = function (strings) {
  return strings.map(findwordLength);
};

console.log(wordLengthsOf(["apple pie", "banana split"]));

/*----------- 22) find Word Lengths ------------------------*/
const flatArray = function (array) {
  return array.flatMap(function (array) { return array; });
};

const flattenedArraysOf = function (arrays) {
  return arrays.map(flatArray);
};

console.log(flattenedArraysOf([[1, [2, 3]], [4, [5, 6]]]));

/*----------- 23) sort letters in array --------------------*/
const sortString = function (string) {
  return string.split('').sort().join('');
};

const sortedLettersOf = function (strings) {
  return strings.map(sortString);
};

console.log(sortedLettersOf(["cat", "bat", "rat"]));

/*----------- 24) sort letters in array --------------------*/
const wrapBrackets = function (string) {
  return '[' + string + ']';
};

const wrappedStringsOf = function (strings) {
  return strings.map(wrapBrackets);
};

console.log(wrappedStringsOf(["apple", "banana"]));

/*----------- 25) calculate areas of rectangle -----------------*/
const areaOfRectagle = function (rectangle) {
  return rectangle.width * rectangle.height;
};

const calculateAreas = function (rectangles) {
  return rectangles.map(areaOfRectagle);
};

console.log(calculateAreas([{ width: 2, height: 3 }, { width: 4, height: 5 }]));

/*----------- 26) Extract Booleans -----------------*/
const extractFlags = function (objects) {
  return objects.map(function (object) { return object.active; });
};

console.log(extractFlags([{ active: true }, { active: false }]));

/*--- 26) calculate percentage contribution of each number -----*/

// calculate percentage contribution of each number in [10, 20, 30] (relative to the total sum) => [16.67, 33.33, 50]
const add = function (x, y) {
  return x + y;
};


const percentageContributions = function (numbers) {
  const sum = numbers.reduce(add, 0);
  return numbers.map(contributionPercentage(sum));
};

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