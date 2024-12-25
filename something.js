// const symobls = ["/\\", "\\/", "/ /", "\\ \\", "/ \\", "\\ /"];

// const randomSymbol = () => symobls[Math.floor(Math.random() * symobls.length)];

// const getColumns = (column) =>
//   Array(column)
//     .fill(0)
//     .map((_) => randomSymbol())
//     .join("");

// const generatePattern = (rows, cols) =>
//   Array(rows).fill(cols).map(getColumns).join("\n");

// console.log(generatePattern(20, 30));

const getGrade = (marks) => {
  const gradesList = [
    [90, 100],
    [80, 90],
    [70, 80],
    [60, 70],
    [0, 70],
  ];

  const index = gradesList.findIndex(
    (array) => array[0] <= marks && array[1] >= marks
  );

  return String.fromCharCode(index + 65);
};

console.log(getGrade(100));
// console.log(getGrade(90));
