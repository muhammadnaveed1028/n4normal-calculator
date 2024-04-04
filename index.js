#! usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enterfirstNumber", type: "number", name: "firstNumber" },
    { message: "secondNumber", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
    }
]);
if (answer.operator === "+") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "/") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else
    console.log("please select valid operator");
