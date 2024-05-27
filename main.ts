#! /usr/bin/env node
 
import inquirer from "inquirer";
import chalk from "chalk";
let todos = []
let condition = true

while(condition)

{
    let todoQuestion = await inquirer.prompt(
    [
        {
         name: "todoquestion1",
         type:"input",
         message:chalk.cyan("What do you want to add in todos?"),
        },
        {
            name:"todoquestion2",
            type:"confirm",
            message:chalk.red("Would you sure to add more in your todo"),
            default:"true",
        }
    ]
);
todos.push(todoQuestion.todoquestion1)
console.log(`${todoQuestion.todoquestion1} Task add in todo sucessfully`);
console.log(todos);
condition = todoQuestion.todoquestion2
}