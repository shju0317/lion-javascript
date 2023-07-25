import { getNode } from "../dom/getNode.js";

function delay(callback, timeout=1000){
  setTimeout(callback, timeout);
}

const first = getNode('.first');
const second = getNode('.second');


// delay(()=>{
//   first.style.top = '-100px';
//   delay(()=>{
//     first.style.transform = 'rotate(360deg)';
//     delay(()=>{
//       first.style.top = '0';
//     });
//   });
// });

function delayP(){
  return new Promise((resolve, reject) => {
    resolve('성공!');
  })
}

// console.log(delayP()); // Promise객체

delayP()
.then((result)=>{
  console.log(result); // 성공!
})
