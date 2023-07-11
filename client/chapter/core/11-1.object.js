/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIindex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)'
};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;
// authorization: 권한
// authentication: 인증
// auth 어떤 의미인지 확인

authUser = {
  uid: 'user-id-12345',
  name: 'bum',
  email: 'bumkeyk@gmail.com',
  isSignIn: true,
  permission: 'paid' // free | paid
}

console.log(authUser);

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['name']);

// 계산된 프로퍼티 (computed property)
let computedProperty = 'phone'; // phone | tel

// class로 객체 만들기
class User{
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
}

// 함수로 객체 만들기
function createUser(name, email, computedProp='phone', number='010-0000-0000') {
  return {
    name: name,
    email: email,
    [computedProp]: number
  }
}

const user1 = createUser('댕이','daeng@gmail.com');
const user2 = createUser('꿍이','ggueng@gmail.com','tel','010-0718-0000');

// shorthand property(단축 프로퍼티)
function createUser2(name, email, computedProp='phone', number='010-0000-0000') {
  return {
    name,
    email,
    [computedProp]: number
  }
}

// 프로퍼티 포함 여부 확인
for(let key in user1){
  if(Object.prototype.hasOwnProperty.call(user1, key)){
    console.log(key);
  }
}

// 프로퍼티 나열
//Object.keys() : key만 모아놓은 배열
let keyArray = Object.keys(authUser);

// getProp(object)
function getProp(object){
  if(typeof object !== 'object'){
    throw new Error('getProp함수의 매개변수는 객체 타입이어야 합니다.')
  }
  return Object.keys(object);
}

getProp(authUser); // ['uid', 'name', 'email', 'isSignIn', 'permission']

function getP(object) {
  let result = [];

  for(let key in object){
    if(({}).hasOwnProperty.call(object,key)){
      result.push(key);
    }
  }
  return result;
}

/* 제거(remove) vs 삭제(delete)
  - 제거: 비우기(null)
  - 삭제: 없애기
*/
// 프로퍼티 제거 or 삭제 

// 제거
// authUser.name = null; 
// 삭제
// delete authUser.uid;

function removeProperty(object, key){
  if(typeof object !== 'object'){
    throw new Error('...');
  }

  if(key === 'all'){
    for(let key of Object.keys(object)){
      object[key] = null;
    }
  }

  object[key] = null; 

  return object;
}

// removeProperty(authUser, 'name');
removeProperty(authUser, 'all');

function deleteProperty(object, key){
  delete object[key]; 

  return object;
}

deleteProperty(authUser, 'uid');

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {name, email, authorization, isLogin}
console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  // if(Object.keys(object).length === 0){
  //   return true;
  // }
  // return false;

  // return Object.keys(object).length === 0 ? true : false;

  return Object.keys(object).length === 0;
}

isEmptyObject(authUser);


/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
let color = ['#ff0000', '#2b00ff', '#00ff2f'];

let [red, blue, green] = color;

console.log(green);

for(let [key,value] of Object.entries(authUser)){
  console.log(key);
}


/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */
const salaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700
}

//const 권혜미 = salaries.권혜미;
//const 이수연 = salaries.이수연;
//const 강예나 = salaries강예나;
//const 김태일 = salaries.김태일;

const {권혜미, 이수연, 강예나, 김태일} = salaries;

console.log(권혜미); // 50


function setElemntCss(options){
  const {width:w = 100, height:h = 100, overflow, color} = options;

  console.log(w);
}

const defaults = {
  overflow: false,
  color: 'orange'
}

setElemntCss(defaults);
