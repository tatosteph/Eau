const args = process.argv.slice(2);
let str = args.join(" ").split(" ");
let espace = "";

function capitalizeFirstLetter() {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let a = str[i];
    if (!isNaN(a)) {
      return "error";
    } else {
      result += a.charAt(0).toUpperCase() + a.slice(1) + " " + espace;
    }
  }
  return result;
}

console.log(capitalizeFirstLetter(str));
