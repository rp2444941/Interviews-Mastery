/*1.========Array Methods
*map()

*create a new array by apply a function to each element.
*Does't modify the original array.
*/
const nums=[1,2,3];
const doubled=nums.map(n=>n*2);
console.log(doubled);//[ 2, 4, 6 ]


//======== filter()
/**
 * return a new array containing only elements that pass the condtion.
 */

const ages=[12,18,25,28];
const adult=ages.filter(a=> a>=18);
console.log(adult);

/** ============ reduce()
 * Reduces array to a single value.
 * Takes a callback(accumulator,currentValue)
 * 
 */

const numbers=[10,20,30];
const sum=numbers.reduce((acc,curr)=>
    acc+curr,0);
console.log(sum);

// map ,filter,reduce--->> functional programing 
//style--> pure functions, no mutation

/********Object Destructuring + Spread Operator ******/

//Example:
const user={name:"Rudra",age:28,city:"patna"};
const {name,age}=user;
console.log(name);
console.log(age);
// console.log(city);ReferenceError: city is not defined

//Spread Operator

const obj1={a: 1,b: 2};
const obj2={...obj1,c:3};
console.log(obj2);


/*******shallow vs deep copy*****/

//shallow copy(reference remain same)
const arr1=[1,2,3];
const arr2=arr1;// X same reference 
arr2.push(4);
console.log(arr1);

//***proper copy(spread or slice)
const arr3=[...arr1];// independent
//copy
arr3.push(5);
console.log(arr1);// unchanged

/** Deep Copy(for nested objects)*/

const obj={a:{x:10}};
const deepCopy=
JSON.parse(JSON.stringify(obj));
deepCopy.a.x=50;
console.log(obj.a.x);//10



//Example:
const users=[
    {name:"Rudra",age:22},
    {name:"Raj",age:28},
    {name:"Pratap",age:17}
]

const adults=users.filter(a=>a.age>=18);
console.log(adults);

