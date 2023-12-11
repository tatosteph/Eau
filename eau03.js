const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n < 0) {
    console.log(-1);
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log("Utilisation: node fibonacci.js <n>");
} else {
  const n = parseInt(args[0]);
  if (isNaN(n)) {
    console.log("Veuillez entrer un nombre entier valide.");
  } else {
    const result = fibonacci(n);
    console.log(result);
  }
}
