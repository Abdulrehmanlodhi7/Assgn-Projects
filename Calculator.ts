import inquirer from "inquirer";

const answer: {
num1:number
num2:number
operator:string
} = await inquirer.prompt([
    {
        type:"number",
        name:"num1",
        message:"Enter your first number:"
    },
    {
        type:"number",
        name:"num2",
        message:"Enter your second number:"
    },
    {
        type:"list",
        name:"operator",
        choices:["Add","Subtract","Multiply","Divide"],
        message:"Select the operator you want to perform:"
    },
]);
let result:number;

switch(answer.operator){
     case'Add':
     result= answer.num1 + answer.num2;
     console.log("The answer for addition is:"+ result);
     break;

     case'Subtract':
     result= answer.num1 - answer.num2;
     console.log("The answer for subtraction is:"+ result);
     break;

     case'Multiply':
     result= answer.num1 * answer.num2;
     console.log("The answer for multiplication is:" + result);
     break;

     case'Divide':
     result=answer.num1/answer.num2;
     console.log("The answer for division is:" + result);
     break;



} 