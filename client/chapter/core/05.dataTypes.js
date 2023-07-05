/* ---------------------------------------------------------------------- */
/* Data Types                                                             */
/* ---------------------------------------------------------------------- */


/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
const empty = null;
console.log(empty);

// 2. 값이 할당되지 않은 상태
let unknown;
console.log(unknown);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const double = "hello"; // 문자 리터럴
const single = 'hello';
const backtick = `hello`; //template literal

const hi = new String('hello'); // 문자 생성자

console.log(typeof double);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 123;
const floatingPointNumber = 10.45;

const nubmer = new Number(123); // 숫자 생성자

console.log(typeof number);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInteger = 123n;

const big = BigInt(123); // new 키워드 불필요

// 6. 참(true, yes) 또는 거짓(false, no)
const bool = true;

console.log(typeof bool);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {};

const Obj = new Object({});

console.log(obj);

// 8. 고유한 식별자(unique identifier)
const unique = Symbol('uid'); // new 키워드 불필요

console.log(typeof unique);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()
console.log( typeof 5+25); // number25
console.log( typeof (5+25)); // number

// 언어 상, 오류

// Object
const user = {
  name: 'tiger',
  age: 28,
  sayHi: function(){
    console.log('hello!');
  },
  alert1: function(){}, // normal function
  alert2(){}, // consise method
  alert3:()=>{} // arrow function
}

console.log(user);
user.sayHi();

// Array
const arr = [10, 100, 1000, 1, 2, 3];

console.log(arr);
console.log(arr[2]);

const newArray = new Array(); 

// function
function 붕어빵틀(재료){
  return 재료 + '맛 붕어빵';
}

const 슈크림붕어빵 = 붕어빵틀('슈크림');
console.log(슈크림붕어빵); // 슈크림맛 붕어빵

const 피자붕어빵 = 붕어빵틀('피자');
console.log(피자붕어빵); // 피자맛 붕어빵

// this


