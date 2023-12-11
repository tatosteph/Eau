const args = process.argv.slice(2);
const FindFirstDuplicatesIndex = args.findIndex(
  (item, index) => index !== args.lastIndexOf(item)
);
console.log(FindFirstDuplicatesIndex);
