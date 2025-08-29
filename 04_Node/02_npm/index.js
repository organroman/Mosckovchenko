import chalk from "chalk";
import oneLinerJoke from "one-liner-joke";

const joke = oneLinerJoke.getRandomJoke();
console.log("🚀 ~ joke:", joke);

// console.log(chalk.bgBlue("npm first project"));
// console.log(chalk.red("Red alert!"));
// console.log(chalk.green.underline("Success!"));

console.log(chalk.greenBright(joke.body));
