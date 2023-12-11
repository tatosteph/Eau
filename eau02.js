// Récupérer les arguments de la ligne de commande
const arguments = process.argv.slice(2);

// Fonction pour inverser l'ordre des mots dans une chaîne de caractères
const reverseWords = (str) => {
  const words = str.split(" ");
  return words.reverse().join(" ");
};

// Fonction pour traiter un argument en vérifiant s'il est entre guillemets
const processArgument = (arg) => {
  if (arg.charAt(0) != "'" && arg.charAt(arg.length - 1) != "'") {
    // Si l'argument est entre guillemets, le retourner tel quel
    return arg; // Supprimer les guillemets
  } else {
    // Sinon, inverser l'ordre des mots
    return reverseWords(arg);
  }
};

// Afficher les arguments avec l'ordre des mots inversé pour ceux qui ne sont pas entre guillemets
console.log(
  arguments
    .map((arg) => processArgument(arg))
    .reverse()
    .join(" ")
);
