// Fonction pour ajouter un zéro devant les nombres < 10
const formatNombre = (nombre) => (nombre < 10 ? `0${nombre}` : `${nombre}`);
// Boucle pour générer les combinaisons
for (let i = 0; i < 100; i++) {
  for (let j = i + 1; j < 100; j++) {
    console.log(`${formatNombre(i)} ${formatNombre(j)}`);
  }
}
