const numbers = process.argv.slice(2);

// Vérifier si tous les arguments sont des nombres valides
if (numbers.some(isNaN)) {
  console.error(
    "Erreur : Les éléments du tableau doivent être des nombres valides."
  );
  process.exit(1);
}
function bblSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        // If the condition is true
        // then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  // Print the sorted array
  return arr.join(" ");
}
console.log(bblSort(numbers));
