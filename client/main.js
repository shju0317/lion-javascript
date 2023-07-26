import { tiger } from "./lib/index.js";

const a = 10;

/* eslint-enable */

const b = 10;
import { xhr, xhrPromise } from "./lib/index.js";

// xhr.get(
//   'https://jsonplaceholder.typicode.com/users', 
//   (result)=>{console.log(result);}, 
//   (err)=>{console.log(err);}
// )

// Promise
// xhr.get(
//   'https://jsonplaceholder.typicode.com/users', 
//   (result)=>{console.log(result);}, 
//   (err)=>{console.log(err);}
// )

// xhrPromise({url: 'https://jsonplaceholder.typicode.com/users'});

const data = await tiger.get('https://jsonplaceholder.typicode.com/users');
console.log(data);