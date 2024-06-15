#!/usr/bin/env node
// shabang
import inquirer from "inquirer";

const calculator = await inquirer.prompt([{
   type:"number",
   name: "first_number",
   message: "Enter your first number:",
},
{
   type: "number",
   name: "second_number",
   message: "Enter your second number:",
},
{
    type: "list",
    name: "operator",
    message: "please select operation type:",
    choices: ["Addition","Subtraction","Multiplication","Division"]
}
])

if (calculator.operator === "Addition"){
    console.log(calculator.first_number + calculator.second_number);
}
else if (calculator.operator === "Subtraction"){
    console.log(calculator.first_number - calculator.second_number);
}
else if (calculator.operator === "Multiplication"){
    console.log(calculator.first_number * calculator.second_number);
}
else if (calculator.operator === "Division"){
    console.log(calculator.first_number / calculator.second_number);
}

    


  



        

    

    













    










    message: "enter your first number"
    type: "number"
    name:"num1"


