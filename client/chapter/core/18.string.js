/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'less is more.';


// length 프로퍼티
let stringTotalLength= message.length;
console.log('stringTotalLength: ', stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log('extractCharacter: ',extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(1,3);
console.log('slice: ',slice);

let subString = message.substring(1,3);
console.log('subString: ',subString);

let subStr = message.substr(1,3);
console.log('subStr: ',subStr);


// 문자열 포함 여부 확인
let indexOf = message.indexOf('s');
console.log('indexOf: ',indexOf); // 2. 2번째에 있어

let lastIndexOf = message.lastIndexOf('m');
console.log('lastIndexOf: ',lastIndexOf);

let includes = message.includes('more');
console.log('includes: ',includes);

let startsWith = message.startsWith('Less');
console.log('startsWith: ', startsWith);

let endsWith = message.endsWith('.');
console.log('endsWith: ',endsWith);


// 공백 잘라내기
//trimLeft, trimRigth 사라짐(접근성 문제: 세로로 읽는 언어의 경우)
let str = ' abc def   gh          '

let trimStart = str.trimStart();
console.log('trimLeft: ',trimStart);

let trimEnd = str.trimEnd();
console.log('trimEnd: ',trimEnd);

let trim = str.trim();
console.log('trim: ', trim);

// 중간에 있는 공백 없애기
console.log(str.replace(/\s*/g,''));

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat: ', repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase: ', toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase: ', toUpperCase);


// 텍스트 이름 변환 유틸리티 함수

function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}

console.log('toCamelCase: ', toCamelCase(message));
console.log('toPascalCase: ',toPascalCase(message));