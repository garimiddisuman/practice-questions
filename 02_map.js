/*-------------- calculate ranks (1-based, descending) for scores ------------*/
const calculateRanks = (objects) => {
  const scores = objects.map(({ score }) => score);
  const sort = scores.sort((x, y) => y - x);

  return objects.map(({ score }) => sort.indexOf(score) + 1);
};

console.log(
  calculateRanks([
    { name: "Alice", score: 80 },
    { name: "Bob", score: 100 },
    { name: "Charlie", score: 90 },
  ])
);

/*-------------------- concatenate first and last names. ---------------------*/
const fullNames = (objects) =>
  objects.map(({ firstName, lastName }) => firstName + " " + lastName);

console.log(
  fullNames([
    { firstName: "Alice", lastName: "Smith" },
    { firstName: "Bob", lastName: "Brown" },
  ])
);

/*--------------- calculate total prices from price and quantity. ------------*/
const totalPrices = (objects) =>
  objects.map(({ price, quantity }) => price * quantity);

console.log(
  totalPrices([
    { price: 10, quantity: 2 },
    { price: 5, quantity: 4 },
  ])
);

/*--------- determine if a person is an adult from name and age. -------------*/
const isAdult = (objects) => objects.map(({ age }) => age >= 18);

console.log(
  isAdult([
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
  ])
);

/*----------- create abbreviations..--> Andhra Pradesh --> AP. ---------------*/
const getCapitalChars = (word) => {
  const abbrevation = [...word]
    .filter((char) => char === char.toUpperCase())
    .join("");

  return abbrevation.split(" ").join("");
};

const abbreviations = (objects) => {
  const strings = objects.flatMap((object) => Object.values(object));
  return strings.map(getCapitalChars);
};

console.log(
  abbreviations([
    { city: "New York", country: "USA" },
    { city: "Los Angeles", country: "USA" },
  ])
);

/*--------------------- extract scores for math tests . ----------------------*/
const mathScores = (objects) => objects.map(({ scores: { math } }) => math);

console.log(
  mathScores([
    { name: "Alice", scores: { math: 90, english: 85 } },
    { name: "Bob", scores: { math: 80, english: 75 } },
  ])
);

/*------------------------------- extract coordinates. -----------------------*/
const extractCoordinates = (objects) => objects.map(({ x, y }) => [x, y]);

console.log(
  extractCoordinates([
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ])
);

/*-------------------------- extract full name and age..----------------------*/
const fullNameAndAge = (objects) =>
  objects.map(({ firstName, lastName, age }) => [
    firstName + " " + lastName,
    age,
  ]);

console.log(
  fullNameAndAge([
    { firstName: "Alice", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Brown", age: 30 },
  ])
);

/*-------------------------------- extract scores ..--------------------------*/
const extractScores = (objects) =>
  objects.map(({ scores: { math, english } }) => [math, english]);

console.log(
  extractScores([
    { name: "Alice", scores: { math: 90, english: 85 } },
    { name: "Bob", scores: { math: 80, english: 75 } },
  ])
);

/*------------------------ extract key-value pairs...-------------------------*/
const keyValuePairs = (objects) =>
  objects.map(({ key, value }) => [key, value]);

console.log(
  keyValuePairs([
    { key: "a", value: 1 },
    { key: "b", value: 2 },
  ])
);

/*------------ split full names into first and last names --------------------*/
const splitFullNames = (objects) => objects.map(({ name }) => name.split(" "));

console.log(splitFullNames([{ name: "Alice Smith" }, { name: "Bob Brown" }]));

/*--- normalize scores so they fall between 0 and 1 based on the max score ---*/
const normalizeScores = (objects) => objects.map(({ score }) => score / 100);

console.log(
  normalizeScores([
    { name: "Alice", score: 80 },
    { name: "Bob", score: 100 },
  ])
);

/*------- group students by their grades: first categorize them into A, B, C,
 and so on, then map each student to their respective category ---------------*/
const getGrade = (marks) => {
  const gradesList = [
    [91, 100],
    [81, 90],
    [71, 80],
    [61, 70],
    [0, 70],
  ];

  const index = gradesList.findIndex(
    (array) => array[0] <= marks && array[1] >= marks
  );

  return String.fromCharCode(index + 65);
};

const groupByGrade = (objects) =>
  objects.map(({ name, grade }) => [name, getGrade(grade)]);

console.log(
  groupByGrade([
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "suman", grade: 100 },
    { name: "charan", grade: 80 },
  ])
);
