const args = process.argv.slice(2);
let majusMinus = () => {
  let split = args.join("");
  let result = "";
  for (let i = 0; i < split.length; i++) {
    let a = split[i];
    if (!isNaN(parseInt(a))) {
      console.log("error");
      return;
    } else if (i % 2 == 0) {
      result += a.toUpperCase();
    } else {
      result += a.toLowerCase();
    }
  }
  return result;
};
console.log(majusMinus(args));
