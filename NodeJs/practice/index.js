const app=require("./app")
const fs=require("fs");
fs.writeFileSync("demo.text", "Hello I am nodejs , fs is non gloabl module")

console.log(app.sumOfVariable(10, 20))

// Console.log() // Global Module 
