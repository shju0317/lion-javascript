/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
const message = document.getElementById('message');
console.log(message);

// - getElementsByTagName
// - getElementsByClassName


// - querySelector
// - querySelectorAll

// const first = document.querySelector('.first');
// const list = document.querySelectorAll('span');
// console.log(first);
// console.log(list);

// el, els
const first = getNode('.first');
const span = getNodes('.span');



// - closest
first.closest('h1');


/* 문서 대상 확인 */
// - matches
// 선택자 안에 class/id를 가지고 있는 대상이 있어?
console.log(first.matches('#message'));

// - contains
// 선택자의 자식들 중에 해당 element가 있어?
console.log(first.contains(secondSpan)); 

// 클래스를 포함하고 있어?
// node.classList.contains()