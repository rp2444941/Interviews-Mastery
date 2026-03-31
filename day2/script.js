 //Function Declaration
 //greet();// work
  function greet(){
console.log("function declaration");
  };
  greet(); // work even if called before declaration(hoited)

  // greet(); Cannot access 'greet' before initialization
  const greet1=function(){
    console.log("Expression");
    
  }
  greet1();



  // Arraow function--> not have this keyword and used mostly callback

  const add=(a,b) => a+b;
  console.log(add(2,3));
  

  //this difference

 const obj={
    name:"Rudra",
    normal:function(){
        console.log(this.name);
    },
    arrow:()=>console.log(this.name)
   };
   obj.normal();//"Rudra"
   obj.arrow();//undefined (arrow takes outer scopes this)

   // 3.callback Function
   /**
    * A function passed as argument to another function
    * used heavily in async js,APIs ,react event handlers.
    * 
    */

   function greet(name,callback){
    console.log("HI "+name);
    callback();
   }
   function done(){
    console.log("Task done!");
    
   }
   greet("Rudra",done)

//#4. Clouser
/**
 * when a function remebers variables from its outer scope even after that scope is gone.
 */
function counter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
        
    };
}
/**
 * counter create count 0;
 * inner function remember count even after outer function finished
 * that memory=clouser
 * 
 * used in:
 * data privacy
 * maintaining state without global variables
 * event handlers,React hooks, etc.
 */
const Clickcount=counter();
Clickcount();
Clickcount();
Clickcount();
Clickcount();
/**
 * Q1.create clouser that adds numbers cumulatively.
 */
function adder(){
let sum=0;
return function(num){
  sum+=num;
  console.log("Total: ",sum);
  
};
}
const addNum=adder();
addNum(5);//Total:5
addNum(3);//Total:8