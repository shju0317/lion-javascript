/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

const first = getNode('.first');
// console.log(first.className); // getter
// first.className = 'box'; // setter

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active'); // boolean값을 반환
console.log(first.classList.contains('hello')); // false


addClass('.first','hellooooo');

/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.backgroundColor = 'orange'; // setter
console.log(first.style.backgroundColor); // getter

console.log(first.style.fontSize); // 결과: 빈 문자

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`
console.log(getComputedStyle(first).fontSize); // 32px
console.log(getComputedStyle(first).getPropertyValue('font-size')); // 32px. 명시적.

function setCss(node, prop, value){
  if(typeof node === 'string') node = getNode(node);

  if(!prop in document.body.style){ // 객체 안에 키 값이 있는지 확인 ⇒ in
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }

  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값입니다.');
  
  node.style[prop] = value; // 객체의 속성에 접근할 때 .표기법은 사용할 수 없다. ⇒ [] 사용
}

setCss('.first','color','#fff');

console.log(getCss('.first','color'));

css('.first','color'); // getter
css('.first','color', 'black'); // setter
