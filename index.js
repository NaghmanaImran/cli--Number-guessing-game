#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to my code - cli guessing game number");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([{
        name: "usrGuessNumber",
        type: "number",
        message: "Enter your guess Number(Number limit from 1 to 5):",
    }]);
if (answer.usrGuessNumber === randomNumber) {
    console.log("congratulation!,you guess a correct number");
}
else
    (console.log("sorry, you guess wrong number"));
