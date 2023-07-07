/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

// in : 객체 안에 내가 원하는 값(property)이 있어?
const key = 'valueOf';
/*
console.log(key in javaScript);
*/

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

Object.prototype.nickName = 'fire';


// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
// console.log(javaScript.hasOwnProperty(key));

// console.log( Object.prototype.hasOwnProperty.call(javaScript, key) );

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

/*
for(let key in javaScript){
  if(Object.prototype.hasOwnProperty.call(javaScript, key)){
    console.log(key);
  }
}
*/

for(let key in javaScript){
  if(({}).hasOwnProperty.call(javaScript, key)){
    // console.log(key);
  }
}

const tens = [10,100,1000,10000];

for(let i in tens){
  console.log(tens[i]);
}

// for...in : 객체를 순환하는 용도로 사용 가능. but 배열 순환에는 적합하지 않음(일관된 순서로 방문하지 않을 수도 있음)