const sentence = "hello there from lighthouse labs";
const today = new Date();

let printChar = function(char) {
  let now = today.getTime();
  let time = 500;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);

    }, time = time + 50);
  }
  setTimeout(() => {
    process.stdout.write("\n");
    
  }, time += 50);
};

printChar(sentence);

// for (const char of sentence) {
//   printChar(char);
// }