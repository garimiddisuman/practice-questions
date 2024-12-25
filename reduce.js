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
  return words.reduce((word, concatenatedWord) => word + concatenatedWord, "");
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
  return words.reduce(isLongest, "");
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
  return words.reduce((string, word) => word + " " + string, "").trim();
};

console.log(reverseWords(["hello", "world"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce((string, word) => string + " " + word, "").trim();
};

console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce((name, word) => name + word);
};

console.log(concatenateNames(["John", "Jane", "Doe"]));

// countVowelsInWords(["hello", "world"]) => "eoo"
const isVowel = function (char) {
  const vowels = "AEIOUaeiou";
  return vowels.includes(char);
};

const concatVowels = function (vowels, string) {
  return vowels + [...string].filter((char) => isVowel(char)).join("");
};

const countVowelsInWords = function (words) {
  return words.reduce(concatVowels, "");
};

console.log(countVowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const firstCharCapital = function (camelCaseString, string) {
  return camelCaseString + string.at(0).toUpperCase() + string.slice(1);
};

const makeCamelCase = function (words) {
  const fromSecondWord = words.slice(1);
  return words.at(0) + fromSecondWord.reduce(firstCharCapital, "");
};

console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const combine = function (combinedString, word) {
  return combinedString + word;
};

const reverseString = function (words) {
  return words.map((word) => [...word].reverse().join("")).reduce(combine, "");
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

console.log(
  concatenateArrays([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

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

// makeObject(["city", "country"], ["Paris", "France"]) =>
// { "city": "Paris", "country": "France" }
const makeObject = (keys, values) =>
  values.reduce(assignValuesTokeys(keys), {});

console.log(makeObject(["city", "country"], ["Paris", "France"]));

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {
  const minAndMax = {};
  minAndMax.min = numbers.reduce((x, y) => (x < y ? x : y), Infinity);
  minAndMax.max = numbers.reduce((x, y) => (x > y ? x : y), -Infinity);
  return minAndMax;
};

console.log(findMinMax([1, 2, 3, 4, 5]));

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 },
// { category: 'A', value: 30 }]) => { A: 40, B: 20 }
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

console.log(
  sumByCategory([
    { category: "A", value: 10 },
    { category: "B", value: 20 },
    { category: "A", value: 30 },
  ])
);

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }])
// => { a: 6, b: 5, c: 4 }
const merge = (mergedObject, object) => {
  for (const key in object) {
    mergedObject[key] = (mergedObject[key] || 0) + object[key];
  }

  return mergedObject;
};

const mergeObjects = function (objects) {
  return objects.reduce(merge, {});
};

console.log(mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]));

// cartesianProduct([1, 2], ['a', 'b']) =>
// [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]

const cartesian = function (arr2) {
  return function (array, e1) {
    return array.concat(arr2.map((e2) => [e1, e2]));
  };
};

function cartesianProduct(arr1, arr2) {
  return arr1.reduce(cartesian(arr2), []);
}

console.log(cartesianProduct([1, 2, 3], ["a", "b"]));

// invertObject({ "a": 1, "b": 2, "c": 3 }) =>
// { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {
  const object = {};
  for (const key in obj) {
    object[obj[key]] = key;
  }

  return object;
};

console.log(invertObject({ a: 1, b: 2, c: 3 }));

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) =>
// { "a": 1, "b": 2, "c": 3, "d": 4 }

const convertIntoObject = (object, array) => {
  object[array[0]] = array[1];
  return object;
};

const mergeArrays = function (arr1, arr2) {
  const combinedArray = [...arr1, ...arr2];
  console.log(combinedArray);
  return combinedArray.reduce(convertIntoObject, {});
};

console.log(
  mergeArrays(
    [
      ["a", 1],
      ["b", 2],
    ],
    [
      ["c", 3],
      ["d", 4],
    ]
  )
);

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) =>
// { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const group = function (grouped, object) {
  if (grouped[object.age]) {
    grouped[object.age].push(object);
    return grouped;
  }

  grouped[object.age] = [object];
  return grouped;
};

const groupByProperty = function (objects) {
  return objects.reduce(group, {});
};

console.log(
  groupByProperty([
    { name: "John", age: 25 },
    { name: "Jane", age: 18 },
    { name: "suman", age: 18 },
    { name: "praneeth", age: 19 },
    { name: "sudheer", age: 19 },
  ])
);

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) =>
// [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroup = function (array, num) {
  if (array.at(-1).at(-1) + 1 === num) {
    array.at(-1).push(num);
    return array;
  }

  array.push([num]);
  return array;
};

const ascendingGroups = function (numbers) {
  const array = numbers.reduce(ascendingGroup, [[]]);
  array.shift();
  return array;
};

console.log(ascendingGroups([0, 1, 2, 3, 4, 3, 4, 5, 10, 6, 7, 8, 9]));

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {
  return pairs.reduce((object, array) => {
    object[array[0]] = array[1];
    return object;
  }, {});
};

console.log(
  flattenToObject([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {
  return strings.reduce((bigWord, word) => {
    return bigWord.length < word.length ? word : bigWord;
  }, "");
};

console.log(longestString(["apple", "banana", "cherry", "dates"]));

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {
  return numbers.reduce((obj, num) => {
    obj.sum = (obj.sum || 0) + num;
    obj.count = (obj.count || 0) + 1;
    return obj;
  }, {});
};

console.log(sumAndCount([1, 2, 3, 4]));

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {
  return arr.flat(Infinity);
};

console.log(deepFlatten([[1, 2], [3, 4, [5, 6]], 7]));

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {
  return numbers.reduce((max, num) => (max < num ? num : max), -Infinity);
};

console.log(findMax([1, 2, 3, 4, 5]));

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumSum = function (array, num) {
  const last = array.at(-1) || 0;
  array.push(num + last);
  return array;
};

const cumulativeSum = function (numbers) {
  return numbers.reduce(cumSum, []);
};

console.log(cumulativeSum([1, 2, 3, 4]));

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunk = function (array, num) {
  if (array.at(-1).at(-1) === num) {
    array.at(-1).push(num);
    return array;
  }

  array.push([num]);
  return array;
};

const equalChunksOfAtLeast = function (numbers) {
  const arrays = numbers.reduce(equalChunk, [[]]);
  return arrays.filter((array) => array.length > 1);
};

console.log(equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]));

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) =>
// { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const seperate = function (object, element) {
  if (typeof element === "string") {
    object.strings.push(element);
    return object;
  }

  object.numbers.push(element);
  return object;
};

const groupByType = function (array) {
  return array.reduce(seperate, { numbers: [], strings: [] });
};

console.log(groupByType([1, "a", 2, "b", 3, "c", 4]));

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const makeArray = function (size) {
  return function (array, num) {
    if (array.at(-1).length === size) {
      array.push([]);
    }

    array.at(-1).push(num);
    return array;
  };
};

const splitIntoSubArrays = function (arr, size) {
  return arr.reduce(makeArray(size), [[]]);
};

console.log(splitIntoSubArrays([1, 2, 3, 4, 5, 6, 7], 3));

// groupByFirstLetter(["apple", "banana", "cherry", "date"])
// => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const makeGroup = function (object, word) {
  if (!object[word.at(0)]) {
    object[word.at(0)] = [word];
    return object;
  }

  object[word.at(0)].push(word);
  return object;
};

const groupByFirstLetter = function (words) {
  return words.reduce(makeGroup, {});
};

console.log(groupByFirstLetter(["apple", "banana", "ant", "date"]));

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const isRepeat = function (array, num) {
  const index = array.indexOf(num);
  const newArray = array.slice(index + 1, array.length);
  return newArray.includes(num);
};

const invert = function (fn, parameters) {
  return function (element) {
    return !fn(parameters, element);
  };
};

const findFirstNonRepeated = function (numbers) {
  return numbers.find(invert(isRepeat, numbers));
};

console.log(findFirstNonRepeated([1, 2, 3, 4, 2, 1, 5, 3]));

// countVowels(["apple", "banana", "grape"]) => { a: 5, e: 2, i: 0, o: 0, u: 0 }
const groupVowels = function (object, char) {
  object[char] = (object[char] || 0) + 1;
  return object;
};

const countVowels = function (words) {
  const array = [...words.join("")];
  const vowels = array.filter((char) => "aeiouAEIOU".includes(char));
  return vowels.reduce(groupVowels, {});
};

console.log(countVowels(["apple", "banana", "grape"]));

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicated = function (array, num) {
  if (array.at(-1) === num) {
    return array;
  }

  array.push(num);
  return array;
};

const removeConsecutiveDuplicates = function (array) {
  return array.reduce(mergeConsecutiveDuplicated, []);
};

console.log(removeConsecutiveDuplicates([1, 1, 1, 2, 3, 3, 4]));

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5, 9, 10, 11])
// => [0, 1, 2, 3, 4, 5]
const getBigArray = function (bigArray, array) {
  return bigArray.length < array.length ? array : bigArray;
};

const longestConsecutiveSubsequence = function (numbers) {
  const sorted = numbers.sort((x, y) => x - y);
  const merge = removeConsecutiveDuplicates(sorted);
  const consecutiveNumbers = ascendingGroups(merge);
  return consecutiveNumbers.reduce(getBigArray, []);
};

console.log(longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5, 9, 10, 11]));

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {};

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};
