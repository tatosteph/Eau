const args = process.argv.slice(2);
let arr = [];
let min = args[0];
let max = args[1];
/*
if (isNaN(min) || isNaN(max)) {
  console.log("error");
} else {
  for (let i = min; i < max; i++) {
    arr.push(i);
  }
  console.log(arr.join(" "));
}*/
let minMax = () => {
  if (isNaN(min) || isNaN(max)) {
    return "error";
  } else {
    for (let i = min; i < max; i++) {
      arr.push(i);
    }
    return arr.join(" ");
  }
};
console.log(minMax());
