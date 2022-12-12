const readline = require("readline");

let r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Hello Please tell us your name ? ", (name) => {
  console.log(`Hello ${name}`);
  r1.close();
});
