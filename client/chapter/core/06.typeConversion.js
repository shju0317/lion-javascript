/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log( typeof String(YEAR)); // 명시적 형 변환
console.log( YEAR + ' '); // 암시적 형 변환

// undefined, null
let days = null;
console.log( typeof String(days)); // 명시적 형 변환
console.log( null + ' '); // 암시적 형 변환

let undef = undefined;
console.log( typeof String(undef)); // 명시적 형 변환
console.log( undefined + ' '); // 암시적 형 변환

// boolean
let isClicked = true;
console.log(String(isClicked));
console.log(isClicked + ' ');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend)); // Nan

// null
let bankbook = null;
console.log(Number(bankbook)); // 0

// boolean
let cutie = false;
console.log(Number(cutie)); // 0

// string
let num = '250';
console.log(typeof num); // string(숫자형 문자)
console.log(Number(num));
console.log(+num);
console.log(num * 1);
console.log(num / 1);

// numeric string
let width = '105.3px';
console.log(Number(width)); // NaN

let w = window.parseFloat(width);
// let w = window.parseInt(width);
console.log(w);

/* 데이터 → 불리언 ---------------------------------------------------------- */
// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 
console.log(Boolean(friend)); // false
console.log(Boolean(bankbook)); // false
console.log(Boolean(0)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('')); // false
console.log(0); // false
console.log(Boolean(1)); // true

console.log('암시적 형 변환 : ' + !false); // 암시적 형 변환 : true
console.log('암시적 형 변환 : ' + !!false); // 암시적 형 변환 : false