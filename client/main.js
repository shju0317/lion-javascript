/* eslint-disable */

console.log("hello js!");

const a = 10;

/* eslint-enable */

const b = 10;
import { xhr } from "./lib/index.js";

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users', 
//   (result)=>{console.log(result);}, 
//   (err)=>{console.log(err);}
// )

// Promise
xhr.get(
  'https://jsonplaceholder.typicode.com/users', 
  (result)=>{console.log(result);}, 
  (err)=>{console.log(err);}
)