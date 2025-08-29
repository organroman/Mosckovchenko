import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("First number", (num1) => {
  rl.question("Second number", (num2) => {
    rl.question("Operation (+ - * /)", (op) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      let result;

      switch (op) {
        case "+":
          result = a + b;
          break;
        case "-":
          result = a - b;
          break;
        case "*":
          result = a * b;
          break;
        case "/":
          result = b !== 0 ? a / b : "Cannot divide by 0";
        default:
          result = "invalid operation";
      }
      console.log(`${num1} ${op} ${num2} = ${result}`);
      rl.close();
    });
  });
});
