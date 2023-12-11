// Importer le module 'process' pour récupérer les arguments de la ligne de commande
const args = process.argv.slice(2);

// Vérifier que deux arguments ont été fournis
if (args.length !== 2) {
  console.log("Usage: node exo.js <chaîne principale> <sous-chaîne>");
} else {
  const chainePrincipale = args[0];
  const sousChaine = args[1];

  // Utiliser la méthode 'includes' pour vérifier la présence de la sous-chaîne
  const resultat = chainePrincipale.includes(sousChaine);

  // Afficher le résultat
  console.log(resultat);
}
