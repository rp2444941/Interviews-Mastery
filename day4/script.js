/**
 * DOM & Events
 * 
 * 1. What is the DOM?  
 Ans:Document Object Model--> HTML ka tree structure jise js manipulate kr skta hai.
 Each tag(div, button,p etc.)=Node.
 js can read/change/add/delete any dom element.     
 */
document.getElementById("text").textContent = "Hello, DOM manipulated!";
/*Every HTML element can be accessed via js-->manipulated dynamically.*/

/** * 2. Query Selectors
 * Method                                 Description
 * getElementById("id")       ------>     select element by id.
 * 
 * getElementsByClassName("class") ------> select multiple by class name.
 * 
 * querySelector("css-selector")  ------>   select first match.
 * 
 * querySelectorAll("css-selector") ------>  select all matches.
 * 
 * getElementsByTagName("tag")  ------>      select multiple by tag name.
 * 
 */

const btn = document.querySelector("#btn");
const inputs = document.querySelectorAll(".input");

/* 3. Event Listeners
used to run code when something happens(click,input,hover,submit etc.)*/

document.getElementById("btn").addEventListener("click", () => {
    console.log("Button clicked!");
});
//input example
document.getElementById("nameInput").addEventListener("input", (e) => {
    console.log("Input value: " + e.target.value);
});
//e(event object) gives all event details like target element, event type, timestamp, etc.

//4. Evnet Bubbling and capturing
/** when we click an element:
 * 1.Event travels from target--> parent-->document--> called Bubbling.
 * 
 * 2.Reverse order =Capturing.
 */
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
/**       ┌───────────────────────--------──┐
         │   #parent (div)   |
         │                  |
         │   ┌────────────────-------┐  
         │   │  #child (button)│  ← Click yahan hota hai
         │   └────────────────-----─┘  
         │                  │
         └────────────────────────---------─┘

Event Flow (Bubbling - Bottom to Top):
         
         Step 1: child clicked  ⬆️
         Step 2: parent clicked ⬆️ 
*/

// In React — event delegation & bubbling concepts come from here.

//5. preventDefault

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("Form submitted without reload");
// });


 // Third parameter 'true' = Capturing Phase
document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
}, true);  // ← Capturing enable

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});
 