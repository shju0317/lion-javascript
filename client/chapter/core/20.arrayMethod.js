/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray
const isArray = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';

function nomalIsArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';
}


const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';

function normalIsNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
}


const arr = [10,100,1000,10000];

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]

/* 요소 순환 ---------------------------- */

// forEach
// forEach는 값을 반환하지 않음
arr.forEach((item, index)=>{
  console.log(item, index);
})

people.forEach((item)=>{
  console.log(item);
})

// forEach를 활용한 이벤트 걸기
// 아래의 방법이 가장 좋은 방법인가? No
// addEventListener가 그만큼 많이 걸리기 때문
const span = document.querySelectorAll('span');

span.forEach((item,index)=>{

  item.addEventListener('click',function(){
    console.log(this,index);
  })

})

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// reverse
// arr.reverse()
// console.log(arr); // 순서를 뒤집음. 원본 훼손

// splice: 맥가이버 칼
arr.splice(1, 0, 5, 25) // 1번 index부터 2개를 삭제하고 5, 25 추가

// sort
arr.sort();
console.log(arr); // [10, 100, 1000, 10000, 25, 5]

// compare function
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다.
// 반환 값 == 0 : a와 b의 순서를 바꾸지 않는다.
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다.
arr.sort((a,b)=>{
  return a-b;
});
console.log(arr); // [5, 10, 25, 100, 1000, 10000]

/* 새로운 배열 반환 ------------------------ */

// concat
const user = ['선범','효윤','준석'];
const newArray = arr.concat(user);
console.log(newArray); // [5, 10, 25, 100, 1000, 10000, '선범', '효윤', '준석']

const newArray2 = [...arr, ...user, 'javascript', 'css'] 
console.log(newArray2); // [5, 10, 25, 100, 1000, 10000, '선범', '효윤', '준석', 'javascript', 'css']
 
// slice
const slice = arr.slice(2,5); // index = 2부터 index = 5 전까지
console.log(slice); // [25, 100, 1000]

// toSorted
const toSorted = arr.toSorted((a,b)=>{
  return b-a;
});

console.log(toSorted);

// toReversed
const toReversed = arr.toReversed();
console.log(toReversed);

// toSpliced
const toSpliced = arr.toSpliced(2,0,'javascript','css','react')
console.log(toSpliced); // [5, 10, 'javascript', 'css', 'react', 25, 100, 1000, 10000]


// map (중요)
const job = people.map((item,index)=>{
  return /* html */`
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `
})

job.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
})

console.log(job);


/* 요소 포함 여부 확인 ---------------------- */

// indexOf
console.log(arr.indexOf(10)); // 1

// lastIndexOf
console.log(arr.lastIndexOf(10)); // 1

// includes
console.log(arr.includes(1000)); // true

/* 요소 찾기 ------------------------------ */

// find : 해당 아이템을 반환
const find = people.find((item)=>{
  return item.id > 1;
})

console.log(find);

// findIndex
const findIndex = people.findIndex((item)=>{
  return item.id === 3;
})

console.log(findIndex);

/* 요소 걸러내기 --------------------------- */

// filter
const filter = people.filter((item)=>{
  return item.id > 2
})
console.log(filter);

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce
const totalAge = people.reduce((acc,cur)=>{
  return acc + cur.age;
},0)

console.log(totalAge); // 165

const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');
document.body.insertAdjacentHTML('beforeend',template);

// reduceRight

/* string ←→ array 변환 ------------------ */

const str = '봉석 윤진 예나 시연 진만 정아';

// split
const stringToArray = str.split(' ');
console.log(stringToArray); // ['봉석', '윤진', '예나', '시연', '진만', '정아']

// join
const arrayToString = stringToArray.join('/')
console.log(arrayToString); // 봉석/윤진/예나/시연/진만/정아