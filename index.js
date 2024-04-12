#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.red(`\n \t \t<<<<%%%%$$$$^=======^$$$$%%%%>>>>`));
console.log(chalk.bold.yellow(`<<<======>>>${chalk.bold.hex('#9999FF')('Welcome to\'Ghulam Nasirs\ \'Currency Converter')}<<<======>>>`));
console.log(chalk.italic.green(` \t \t <<<<%%%%$$$$^=======^$$$$%%%%>>>>`));
//define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1, //base currency
    "EUR": 0.9, //european currency (Euro) 
    "JYP": 113, //japenese currency (yen)
    "CAD": 1.3, //canadian doller
    "AUD": 1.65, //australian doller
    "PKR": 277.52, //pakistani rupees
    // add more currencies and their exchange rates here
};
//prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: chalk.red("select the currency to convert from:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: chalk.yellow("select the currency to convert into:"),
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: chalk.blue("Enter the amount to convert:"),
    }
]);
//perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//disply the converted amount
console.log(`converted_amount = ${chalk.green(converted_amount.toFixed(2))}`);
