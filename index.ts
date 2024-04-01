#! /usr/bin/env node

import inquirer from "inquirer";


// 1)user input for guessnig number 

// 2)computer will generate a rendom number

// 3)compare user input with computer generated number and show result



const answers = await inquirer.prompt([
    {
      name:"userGuessedNumber",
      type:"number",
      message:"please guess a number between 1 to 6:",
    }
]);

const randomNumber = Math.floor( Math.random() * 6 + 1 );

if(answers.userGuessedNumber === randomNumber){
    console.log("congratulation! you guessed right number.")
}
else {
    console.log("you guess wrong number")
}