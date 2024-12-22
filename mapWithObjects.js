// calculate ranks (1-based, descending) for scores in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [2, 1, 3]
const calculateRanks = function (objects) { };

const extractFlags = function (objects) { };

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (objects) { };

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const totalPrices = function (objects) { };

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) { };

// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const abbreviations = function (objects) { };

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (objects) { };

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (objects) { };

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (objects) { };

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (objects) { };

// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (objects) { };

// split full names into first and last names from [{ name: "Alice Smith" }, { name: "Bob Brown" }] => [["Alice", "Smith"], ["Bob", "Brown"]]
const splitFullNames = function (objects) { };

// normalize scores so they fall between 0 and 1 based on the max score from [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }] => [0.8, 1]
const normalizeScores = function (objects) { };

// normalize scores based on a curve: first find the max score, then subtract the mean, and scale the results to a range of 0-100 in [{ name: "Alice", score: 80 }, { name: "Bob", score: 100 }, { name: "Charlie", score: 90 }] => [60, 100, 80]
// Steps: Find max score, calculate mean, normalize each score.
const normalizeWithCurve = function (objects) { };

// group students by their grades: first categorize them into A, B, C, and so on, then map each student to their respective category in [{ name: "Alice", grade: 85 }, { name: "Bob", grade: 92 }] => [['Alice', 'B'], ['Bob', 'A']]
// Steps: Categorize grades, then group students by category.
const groupByGrade = function (objects) { };