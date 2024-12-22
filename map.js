/*------------ 1) Squares of all Numbes in an array --------------*/
const squaresOf = function (numbers) {
  return numbers.map((num) => num * num);
};

console.log(squaresOf([1, 2, 3]));

/*---------- 2) Lengths of each string in an array ---------------*/
const lengthsOf = function (strings) {
  return strings.map((string) => string.length);
};

console.log(lengthsOf(["apple", "banana", "kiwi"]));

/*-------- 3) All Strings into UpperCase in an array --------------*/
const uppercaseOf = function (strings) {
  return strings.map((string) => string.toUpperCase());
};

console.log(uppercaseOf(["hello", "world"]));
console.log(uppercaseOf(["Suman", "garimiddi"]));

/*------------- 4) First Chars of Each string --------------------*/
const firstChar = function (string) {
  return string === '' ? string.slice(-1) : string.at(0);
};

const firstCharactersOf = function (strings) {
  return strings.map(firstChar);
};

console.log(firstCharactersOf(["apple", "banana", "kiwi"]));
console.log(firstCharactersOf(["a", "", "k"]));

/*------------- 5) Truth values of numbers ----------------------*/
const truthValuesOf = function (numbers) {
  return numbers.map((number) => number !== 0);
};

console.log(truthValuesOf([0, 1, 2, 3]));
console.log(truthValuesOf([-1, 0, 2, 3]));

/*------------- 6) Reverse Strings of Array ----------------------*/
const reversedStringsOf = function (strings) {
  return strings.map((string) => [...string].reverse().join(''));
};

console.log(reversedStringsOf(["hello", "world"]));
console.log(reversedStringsOf(["", "a"]));

/*------- 7) Double letters of each string in an array ---------------*/
const doubleEveryChar = function (string) {
  return [...string].map((char) => char.repeat(2)).join('');
};

const doubleLettersOf = function (strings) {
  return strings.map(doubleEveryChar);
};

console.log(doubleLettersOf(["cat", "dog", "bat"]));

/*------------- 8) Complement of booleans ----------------------*/
const negatedBooleansOf = function (booleans) {
  return booleans.map((boolean) => !boolean);
};

console.log(negatedBooleansOf([true, false, true]));

/*-------- 9) character codes according to UTF - 16 ----------------*/
const charCodesOf = function (strings) {
  return strings.map((char) => char.charCodeAt());
};

console.log(charCodesOf(["a", "b", "c"]));

/*----------- 10) Extract domain names from mails ------------------*/
const domainNamesOf = function (emails) {
  return emails.map((email) => email.slice(email.indexOf('@') + 1));
};

console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));

/*------------ 11) Split words into an array ---------------------*/
const splitWordsOf = function (strings) {
  return strings.map((string) => string.split(" "));
};

console.log(splitWordsOf(["hello world", "goodbye moon"]));
console.log(splitWordsOf(["suman", "suman garimiddi"]));

/*-------------- 12) Join arrays into a String ---------------------*/
const joinedArraysOf = function (arrayOfArrays) {
  return arrayOfArrays.map((array) => array.join(""));
};

console.log(joinedArraysOf([["a", "b"], ["c", "d"]]));

/*---------------- 13) Repeated Strings -------------------------*/
const repeatedStringsOf = function (strings) {
  return strings.map((string) => string + string);
};

console.log(repeatedStringsOf(["hi", "bye"]));

/*--------- 14) count vowels in --------------------*/
const isVowel = function (char) {
  const vowels = 'AEIOUaeiou';
  return vowels.includes(char);
};

const vowelsCount = function (string) {
  return [...string].reduce(function (count, char) {
    return isVowel(char) ? count + 1 : count;
  }, 0);
};

const countVowelsOf = function (strings) {
  return strings.map(vowelsCount);
};

console.log(countVowelsOf(["apple", "banana", "grape"]));

/*--------------- 15) Reverse Array of Arrays -----------------------*/
const reversedArraysOf = function (arrays) {
  return arrays.map((array) => array.reverse());
};

console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));

/*-------------- 16) Remove vowels from strings -----------------------*/
const invert = function (fn) {
  return function (char) {
    return !fn(char);
  };
};

const withoutVowelsOf = function (strings) {
  return strings.map((string) => [...string].filter(invert(isVowel)).join(''));
};

console.log(withoutVowelsOf(["apple", "banana", "grape"]));

/*--------- 17) Cumulative Sums of array of arrays ------------------*/
const sumUptoCurrentElement = function (array, element) {
  const lastElement = array.at(-1) || 0;
  array.push(lastElement + element);
  return array;
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map((numbers) => numbers.reduce(sumUptoCurrentElement, []));
};

console.log(cumulativeSumsOf([[1, 2, 3], [4, 5, 6]]));

/*------------ 18) Reverse words in string ----------------------*/
const reverseWord = function (string) {
  const arrayOfWords = string.split(" ");
  return arrayOfWords.map((word) => [...word].reverse().join(''));
};

const reversedWordsOf = function (strings) {
  return strings.map(reverseWord);
};

console.log(reversedWordsOf(["hello world", "goodbye moon"]));

/*-------- 19) Extract Unique Characters in string --------------*/
// -->  Maintain the order of their first appearance in each string
const concatUniqueChars = function (uniqueChars, char) {
  if (!uniqueChars.includes(char)) {
    uniqueChars.push(char);
  }

  return uniqueChars;
};

const extractUniqueChars = function (string) {
  return [...string].reduce(concatUniqueChars, []).join('');
};

const uniqueCharactersOf = function (strings) {
  return strings.map(extractUniqueChars);
};

console.log(uniqueCharactersOf(["apple", "banana", "grape"]));

/*----------- 20) generate ranges from ------------------------*/
const range = function (num) {
  return Array(num).fill(0).map((_, i) => i);
};

const rangesOf = function (numbers) {
  return numbers.map(range);
};

console.log(rangesOf([3, 5, 2]));

/*----------- 21) capitalized First Letters ------------------------*/
const firstCharCapital = function (string) {
  return string.at(0).toUpperCase() + string.slice(1);
};

const capitalizedFirstLettersOf = function (strings) {
  return strings.map(firstCharCapital);
};

console.log(capitalizedFirstLettersOf(["hello world", "goodbye moon"]));

/*----------- 22) find Word Lengths ------------------------*/
const findwordLength = function (string) {
  const arrayOfWords = string.split(' ');
  return arrayOfWords.map((word) => word.length);
};

const wordLengthsOf = function (strings) {
  return strings.map(findwordLength);
};

console.log(wordLengthsOf(["apple pie", "banana split"]));

/*----------- 23) flat arrays in arrays ------------------------*/
const flattenedArraysOf = function (arrays) {
  return arrays.map((array) => array.flat());
};

console.log(flattenedArraysOf([[1, [2, 3]], [4, [5, 6]]]));

/*----------- 24) sort letters in array --------------------*/
const sortedLettersOf = function (strings) {
  return strings.map((string) => [...string].sort().join(''));
};

console.log(sortedLettersOf(["cat", "bat", "rat"]));

/*----------- 25) sort letters in array --------------------*/
const wrapBrackets = function (string) {
  return '[' + string + ']';
};

const wrappedStringsOf = function (strings) {
  return strings.map(wrapBrackets);
};

console.log(wrappedStringsOf(["apple", "banana"]));

/*----------- 26) calculate areas of rectangle -----------------*/
const calculateAreas = function (rectangles) {
  return rectangles.map((rectangle) => rectangle.width * rectangle.height);
};

console.log(calculateAreas([{ width: 2, height: 3 },
{ width: 4, height: 5 }
]));

/*----------- 27) Extract Booleans -----------------*/
const extractFlags = function (objects) {
  return objects.map((object) => object.active);
};

console.log(extractFlags([{ active: true }, { active: false }]));

/*----- 28) calculate percentage contribution of each number -----*/
const add = function (x, y) {
  return x + y;
};

const percentageContributions = function (numbers) {
  const totalAmount = numbers.reduce(add, 0);
  return numbers.map((contribution) => (contribution / totalAmount) * 100);
};

console.log(percentageContributions([10, 20, 30]));

/*----- 29) subtract the smallest number from each number -----*/
const subtractMin = function (numbers) {
  const small = numbers.reduce((num, small) => Math.min(num, small), Infinity);
  return numbers.map((num) => num - small);
};

console.log(subtractMin([3, 8, 1]));

/*----- 30) normalize strings by the longest string length -----*/
const isLongestWord = function (longestWord, word) {
  return longestWord.length < word.length ? word : longestWord;
};

const normalizeStringLengths = function (strings) {
  const longestWordLength = strings.reduce(isLongestWord, '').length;

  return strings.map((string) => string.padEnd(longestWordLength));
};

console.log(normalizeStringLengths(["cat", "elephant", "dog"]));

/* 31) normalize strings by centering them based on the longest string length */
const x = function (longestLength) {
  return function (string) {
    const start = Math.floor((longestLength - string.length) / 2);
    return (' '.repeat(start) + string).padEnd(longestLength);
  };
};

const centerJustifyStrings = function (strings) {
  const longestWordLength = strings.reduce(isLongestWord, '').length;

  return strings.map(x(longestWordLength));
};

console.log(centerJustifyStrings(["cat", "elephant", "dog"]));
console.log(centerJustifyStrings(["cat", "pradeep", "a"]));

/* 32) map each number to the difference between it and the average 
of the array in [10, 20, 30] => [-10, 0, 10] */
const average = function (numbers) {
  const sum = numbers.reduce(add, 0);

  return sum / (numbers.length);
};

const differencesFromMean = function (numbers) {
  const avg = average(numbers);

  return numbers.map((number) => number - avg);
};

console.log(differencesFromMean([10, 20, 30]));

/*-- 33) mark the largest number in an array as true, others as false 
in [1, 3, 2] => [false, true, false] -*/
const markLargestNumber = function (numbers) {
  const largest = numbers.reduce((num, big) => Math.max(big, num), -Infinity);
  return numbers.map((num) => num === largest);
};

console.log(markLargestNumber([1, 3, 2]));

/*-- 34) calculate the percentage of each number relative to the 
total sum of the array, and then sort the percentages in descending 
order in [100, 200, 50, 25] => [50, 25, 12.5, 12.5] --*/
const percentageOfTotalSorted = function (numbers) {
  const totalAmount = numbers.reduce(add, 0);
  const percentOfNumber = numbers.map((number) => (number / totalAmount) * 100);
  return percentOfNumber.sort((a, b) => b - a);
};

console.log(percentageOfTotalSorted([100, 200, 50, 25]));