import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name?", (name) => {
  fs.appendFileSync("users.txt", name + "\n");
  console.log("Name added to users.txt");
  rl.close();
});
