function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}
function findNextPrime(target) {
  let candidate = target;
  while (true) {
    candidate++;
    if (isPrime(candidate)) {
      return candidate;
    }
  }
}
const args = process.argv.slice(2);

if (args.length !== 1) {
  console.log("Utilisation : node exo.js <nombre>");
} else {
  const target = parseInt(args[0]);
  if (isNaN(target)) {
    console.log("Veuillez entrer un nombre valide.");
  } else {
    const nextPrime = findNextPrime(target);
    console.log(nextPrime);
  }
}
