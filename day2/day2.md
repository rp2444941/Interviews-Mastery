1. Function Declaration vs Expression
function greet(){
    console.log("Rudra")// Rudra
}
greet();// work event if call before declaration(Hoiting)

****** Function Expression
const greet=function(){
    console.log("Rudra")
}
greet();//works only after definition

*** declaration function are hoisted completely; expression are not.

2. Arrow Function
  .short syntax
  .Does not have its own this
  .used mostly for callBack

  


