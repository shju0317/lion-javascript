/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

// const first = getNode('.first');

function handler(){
  // console.log('HTML속성에서 이벤트 실행');
  console.log('DOM 프로퍼티에서 이벤트 실행');
}

// first.onclick = handler;

// click, mousemove, mouseover, mouseout, mousedown, mouseup

// setTimeout(() => {
//   first.removeEventListener('click', handleClick);  
// }, 3000);


// const remove = bindEvent('.first','click',handleClick);
// setTimeout(() => {
//   remove();
// }, 3000);

/* 이벤트 객체(event object)
이벤트가 발생하면 브라우저는 이벤트 객체를 만든다.
객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달한다.
 */


// first.addEventListener('click', handleClick);

const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClick(e){
  let x = e.offsetX;
  let y = e.offsetY;
  
  ball.style.transform = `translate(${x}px, ${y}px)`;
}


function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}


function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}


ground.addEventListener('click',handleClick);


// throttle debounce

ground.addEventListener('mousemove',debounce((e)=>{
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `

  insertLast(ground,template)
}));