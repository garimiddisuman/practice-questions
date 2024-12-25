// const symobls = ["/\\", "\\/"];

// const randomSymbol = () => symobls[Math.floor(Math.random() * symobls.length)];

// const getColumns = (column) =>
//   Array(column)
//     .fill(0)
//     .map((_) => randomSymbol())
//     .join("");

// const generatePattern = (rows, cols) =>
//   Array(rows).fill(cols).map(getColumns).join("\n");

// console.log(generatePattern(20, 30));

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }])
// => { a: 6, b: 5, c: 4 }

const merge = function (merged, object) {
  for (const key in object) {
    merged[key] = (merged[key] || 0) + object[key];
  }

  return merged;
};

const mergeObjects = function (objects) {
  return objects.reduce(merge, {});
};

console.log(mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]));
