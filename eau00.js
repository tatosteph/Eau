const generateCombinations = () => {
  const combinations = [];
  for (let i = 0; i <= 7; i++) {
    for (let j = i + 1; j <= 8; j++) {
      for (let k = j + 1; k <= 9; k++) {
        combinations.push(`${i}${j}${k}`);
      }
    }
  }
  return combinations;
};

const validCombinations = generateCombinations().filter((combination) => {
  const uniqueDigits = new Set(combination);
  return uniqueDigits.size === 3;
});

console.log(validCombinations.join(" "));
