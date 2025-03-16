const line1 = (index) => ["/ ", " \\"].at(index);
const line2 = (index) => [" /", "\\ "].at(index);
const random = () => Math.floor(Math.random() * 2);

const generatePattern = (height, width) => {
  const pattern = [];

  for (let i = 0; i < height; i++) {
    const row = Array(width).fill(0).map(random);
    pattern.push(row.map(line1).join(""), row.map(line2).join(""));
  }

  return pattern.join("\n");
};

console.log(generatePattern(10, 20));
