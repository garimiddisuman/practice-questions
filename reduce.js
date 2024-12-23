// sumOf([1, 2, 3, 4]) => 10
const sumOf = function (numbers) {
  return numbers.reduce((x, y) => x + y);
};

console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const productOf = function (numbers) {
  return numbers.reduce((x, y) => x * y);
};

console.log(productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const add = function (x, y) {
  return x + y;
};

const averageOf = function (numbers) {
  const sum = numbers.reduce(add, 0);

  return sum / numbers.length;
};

console.log(averageOf([1, 2, 3, 4, 5]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {
  return numbers.reduce((x, y) => Math.min(x, y), Infinity);
};

console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {
  return numbers.reduce((x, y) => Math.max(x, y), -Infinity);
};

console.log(maxOf([3, 1, 4, 1, 5, 9, 2]));

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const sumPositiveNumbers = function (numbers) {
  const positives = numbers.filter((x) => x > 0);

  return positives.reduce((x, y) => x + y);
};

console.log(sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const sumOfSquares = function (numbers) {
  const squares = numbers.map((num) => Math.pow(num, 2));

  return squares.reduce((x, y) => x + y);
};

console.log(sumOfSquares([1, 2, 3, 4]));

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const sumOfOddNumbers = function (numbers) {
  const odds = numbers.filter((x) => x & 1);

  return odds.reduce((x, y) => x + y);
};

console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// countNegativeNumbers([1, -2, 3, -4]) => 2
const isNegative = function (count, num) {
  return num < 0 ? count + 1 : count;
};

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(isNegative, 0);
};

console.log(countNegativeNumbers([1, -2, 3, -4]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  const evens = numbers.filter((num) => !(num % 2));
  const squares = evens.map((num) => Math.pow(num, 2));
  return squares.reduce((x, y) => x + y);
};

console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// concatenateWords(["hello", "world"]) => "helloworld"
const concatenateWords = function (words) {
  return words.reduce((word, concatenatedWord) => word + concatenatedWord, '');
};

console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana"
const compare = function (x, y) {
  return x < y;
};
const isLongest = function (longestWord, word) {
  return compare(longestWord.length, word.length) ? word : longestWord;
};

const longestWord = function (words) {
  return words.reduce(isLongest, '');
};

console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const isSmallest = function (smallestWord, word) {
  return compare(word.length, smallestWord.length) ? word : smallestWord;
};

const shortestWord = function (words) {
  return words.reduce(isSmallest);
};

console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {
  return words.reduce((s1, s2) => s1 + "," + s2);
};

console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"
const reverseWords = function (words) {
  return words.reduce((string, word) => word + ' ' + string, '').trim();
};

console.log(reverseWords(["hello", "world"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce((string, word) => string + ' ' + word, '').trim();
};

console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce((name, word) => name + word);
};

console.log(concatenateNames(["John", "Jane", "Doe"]));

// countVowelsInWords(["hello", "world"]) => "eoo"
const isVowel = function (char) {
  const vowels = 'AEIOUaeiou';
  return vowels.includes(char);
};

const concatVowels = function (vowels, string) {
  return vowels + [...string].filter((char) => isVowel(char)).join('');
};

const countVowelsInWords = function (words) {
  return words.reduce(concatVowels, '');
};

console.log(countVowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const firstCharCapital = function (camelCaseString, string) {
  return camelCaseString + string.at(0).toUpperCase() + string.slice(1);
};

const makeCamelCase = function (words) {
  const fromSecondWord = words.slice(1);
  return words.at(0) + fromSecondWord.reduce(firstCharCapital, '');
};

console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const combine = function (combinedString, word) {
  return combinedString + word;
};

const reverseString = function (words) {
  return words.map((word) => [...word].reverse().join('')).reduce(combine, '');
};

console.log(reverseString(["apple", "banana", "cherry"]));

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const makeDuplicate = function (duplicatedArray, num) {
  duplicatedArray.push(num, num);
  return duplicatedArray;
};

const duplicateNumbers = function (numbers) {
  return numbers.reduce(makeDuplicate, []);
};

console.log(duplicateNumbers([1, 2, 3]));

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {
  return arrays.reduce((flatArray, array) => flatArray.concat(array), []);
};

console.log(concatenateArrays([[1, 2], [3, 4], [5, 6]]));

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const concatUniques = function (uniqueChars, element) {
  if (!uniqueChars.includes(element)) {
    uniqueChars.push(element);
  }

  return uniqueChars;
};

const uniqueNumbers = function (numbers) {
  return numbers.reduce(concatUniques, []);
};

console.log(uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));

// groupByLength(["apple", "banana", "cherry", "date"]) 
// => { 5: ["apple"] 6: ["banana", "cherry"], 4: ["date"] }
const grouping = function (object, element) {
  if (!object[element.length]) {
    object[element.length] = [element];
    return object;
  }

  object[element.length] = object[element.length].concat(element);
  return object;
};

const groupByLength = function (strings) {
  const sortByLengths = strings.sort((a, b) => a.length - b.length);

  return sortByLengths.reduce(grouping, {});
};

console.log(groupByLength(["apple", "banana", "cherry", "date"]));

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const occurancesCount = function (object, element) {
  if (!object[element]) {
    object[element] = 1;
    return object;
  }

  object[element] = object[element] + 1;
  return object;
};

const countOccurrences = function (strings) {
  return strings.reduce(occurancesCount, {});
};

console.log(countOccurrences(["apple", "banana", "cherry", "banana"]));

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }

const mergeObjects = function (objects) {
};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const assignValuesTokeys = function (keys) {
  let index = 0;

  return function (object, value) {
    object[keys[index]] = value;
    index++;
    return object;
  };
};

const zip = function (keys, values) {
  return values.reduce(assignValuesTokeys(keys), {});
};

console.log(zip(["a", "b", "c"], [1, 2, 3]));

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {
  return values.reduce(assignValuesTokeys(keys), {});
};

console.log(makeObject(["city", "country"], ["Paris", "France"]));

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) { };

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {
};

// console.log(mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]));

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) { };

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) { };

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) { };

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) { };

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) { };

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) { };

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) { };

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) { };

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) { };

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) { };

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) { };

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) { };

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) { };

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) { };

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) { };

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) { };

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) { };

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) { };

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) { };

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) { };

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) { };

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
// const cartesian = function (arr2) {
//   return function (e1) {
//     console.log(e1);
//     return arr2.reduce((combine, e2) => combine.concat([e1, e2]), []);
//   };
// };

// function cartesianProduct(arr1, arr2) {
//   return arr1.reduce(cartesian(arr2), []);
// }

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {
  const minAndMax = {};
  minAndMax.min = numbers.reduce((x, y) => x < y ? x : y, Infinity);
  minAndMax.max = numbers.reduce((x, y) => x > y ? x : y, -Infinity);
  return minAndMax;
};

console.log(findMinMax([1, 2, 3, 4, 5]));

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const byCategory = function (sumBy, object) {
  if (!sumBy[object.category]) {
    sumBy[object.category] = object.value;
    return sumBy;
  }

  sumBy[object.category] = sumBy[object.category] + object.value;
  return sumBy;
};

const sumByCategory = function (items) {
  return items.reduce(byCategory, {});
};

console.log(sumByCategory([
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'A', value: 30 }
]));
