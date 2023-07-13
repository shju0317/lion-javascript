/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
console.log(portableFan.photos.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }

// sync(동기) vs async(비동기)
// sync: 코드가 작성된 순서대로 실행
// async : 코드의 실행흐름을 제어할 수 있음
setTimeout(() => {
  console.log('3초 뒤에 해당 코드가 실행됩니다.'); // 비동기 코드
}, 3000);

// json(JavaScript Object Notation)
const button = document.querySelector('button');
console.log(button);
button?.addEventListener('click',function(){
  this.style.backgroundColor = 'cyan'
})

let count = 0;
setInterval(() => {
  console.log(++count);
}, 1000);

// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.
console.log(portableFan.photos?.animate);

// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.


// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

