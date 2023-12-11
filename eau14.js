let numbers = process.argv.slice(2);
let arr = [];
// Vérifier si tous les arguments sont des nombres valides
if (numbers.some(isNaN)) {
  console.error(
    "Erreur : Les éléments du tableau doivent être des nombres valides."
  );
  process.exit(1);
}
/*
let sort = numbers.sort();
for (let i = 0; i < sort.length; i++) {
  let character = String.fromCharCode(sort[i]);
  arr.push(character);
}
console.log(arr.join(" "));
*/
let convertNumber = (array) => {
  array.sort();
  for (let i = 0; i < array.length; i++) {
    let character = String.fromCharCode(array[i]);
    arr.push(character);
  }
  return arr.join(" ");
};
console.log(convertNumber(numbers));
