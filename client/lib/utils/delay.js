import { getNode } from "../dom/getNode.js";
import { insertLast } from "../dom/insert.js";
import { xhrPromise } from "./xhr.js";

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

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: '성공',
  errorMessage: '알 수 없는 오류가 발생했습니다.'
}

function delayP(options){

  let config = {...defaultOptions} // 얕은 복사. spread syntax(전개 연산)

  if(typeof options === 'number'){
    config.timeout = options;
  }

  if(typeof options === 'object'){
    config = {...defaultOptions, ...options} // options를 defaultOptions에 덮어쓰기
  }

  const {shouldReject, timeout, data, errorMessage} = config;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!shouldReject){
        resolve(data)
      }else{
        reject({message: errorMessage})
      }
    }, timeout);
  })
}

// console.log(delayP()); // Promise객체

delayP()
.then((result)=>{
  // console.log(result); // 성공!
})
.catch(({message})=>{
  console.log(message);
})
.finally(()=>{
  // console.log('어쨌든 실행');
})


// 예제
async function delayA(){
  return '성공!'
}

const data = await delayA();



// 라면끓이기
// function 라면끓이기(){ // 순차적으로 실행되는 것처럼 보이지만 그렇지 않음 -> async/await 사용 이유: 코드의 실행흐름 제어
//   console.log('물넣기');
//   console.log('스프넣기');
//   console.log('면넣기');
//   console.log('계란넣기');
//   console.log('접시');
// }

async function 라면끓이기(){  
  
  const 물 = await delayP({data:'물넣기'});
  console.log(물);

  const 스프 = await delayP({data:'스프넣기'});
  console.log(스프);

  
  delayP({data:'면넣기'}).then((res)=> console.log(res));
  
  await delayP();
  console.log('계란넣기');
  
  await delayP();
  console.log('접시');
}

// 라면끓이기();



// function getUserData(){
//   const data = xhrPromise.get('https://jsonplaceholder.typicode.com/users')
//   data.then((res)=>{console.log(res);})
// }

async function getUserData(){
  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon')
  const result = await data
  console.log( result )
}

// getUserData()


async function getData(){

  const data = xhrPromise.get('https://pokeapi.co/api/v2/pokemon/50')

  // data.then((res)=>{
  //   console.log( res );
  // })
  
  const pokemon = await data;

  console.log( pokemon.sprites['front_default'] );

  insertLast(document.body,`<img src="${pokemon.sprites['back_default']}" alt="" />`)
}

// getData()


