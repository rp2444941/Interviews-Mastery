day-1:
Q1. what is js
Ans:
 js is synchronous single threaded langauge(means js execute  line by line in specific order using call stcak )
 its run inside browser(via js engine- eg. chrome--> v8)

 Q2. How js Executes Code
 Ans:
     1.js create Global Execution Context(GEC)
     2. Each function call-->New Executin Context.
     3.Executiin Context=
           .memory(vraible Enviroment)
           .code(Execution phase)

Q3. Hoisting
  Ans:
  js move all variable and function declrations to the top of their scope before execution.
  var-->hoiting as undefined
  let and const--> hoiting as initialize(temporal dead zone)


  Q4.Scope
  Ans:
  .Global Scope:Accessible anywhere
  .Function Scope:Variable inside functions
  .Block Scope:{} brackets create scope for let/const

