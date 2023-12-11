// Vérifier s'il y a au moins deux éléments dans le tableau
if (process.argv.length < 4) {
  console.error("Erreur : Le tableau doit contenir au moins deux éléments.");
  process.exit(1);
}

// Récupérer les nombres à partir des arguments de la ligne de commande
const numbers = process.argv.slice(2).map(Number);

// Vérifier si tous les arguments sont des nombres valides
if (numbers.some(isNaN)) {
  console.error(
    "Erreur : Les éléments du tableau doivent être des nombres valides."
  );
  process.exit(1);
}

// Fonction pour calculer la différence minimale absolue entre deux éléments d'un tableau
function minAbsoluteDifference(arr) {
  if (arr.length < 2) {
    console.error("Erreur : Le tableau doit contenir au moins deux éléments.");
    process.exit(1);
  }

  let minDiff = Math.abs(arr[1] - arr[0]);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = Math.abs(arr[j] - arr[i]);
      if (diff < minDiff) {
        minDiff = diff;
      }
    }
  }

  return minDiff;
}

// Afficher la différence minimale absolue
const result = minAbsoluteDifference(numbers);
console.log(result);
