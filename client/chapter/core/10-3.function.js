/* ---------------------- */
/* Functions → Arrow      */
/* ---------------------- */

const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
//                rest parmeter
let calcAllMoney = (...args)=>{
  // let total = 0;
  // args.forEach((item)=>{
  //   total+=item;
  // })
  //return total;

  // return args.reduce(function(acc,item){
  //   return acc+item;
  // },0)

  return args.reduce((acc,item) => acc+item, 0)
  
};

const result = calcAllMoney(1000,500,2000);
console.log(result);


// 화살표 함수와 this

// 객체 안에서 this
const user = {
  total: 9,
  name: 'tm',
  age: 29,
  address: '서울시 성동구 성수동',
  grades: [80, 90, 100],
  totalGrades: function(){
    console.log(this.grades);
  }
}

/*
함수선언문: function normalFunction(){}
함수표현식: const expressFuntion = function(){}
화살표함수식: const arrowFunction = ()=>{}
*/
function normalFunction(){
  console.log(this);
}
const expressFuntion = function(){
  console.log(this);
}
const arrowFunction = ()=>{
  console.log(this);
}



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow; 

// repeat(text: string, repeatCount: number): string;
let repeat; 

