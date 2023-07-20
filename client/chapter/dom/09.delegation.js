/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


/* 클래스를 사용한 위임 ---------------- */

const container = getNode('.container');

/*
function handleDelegation(e){
  let target = e.target;
  let className = target.getAttribute('class');

  if(className === 'a'){
    console.log('a버튼 클릭!');
  }
  if(className === 'b'){
    console.log('b버튼 클릭!');
  }
  if(className === 'c'){
    console.log('c버튼 클릭!');
  }
  if(className === 'd'){
    console.log('d버튼 클릭!');
  }
}
*/

/*
function handleDelegation(e){
  let target = e.target;
  let dataName = target.dataset.name;

  if(dataName === 'A'){
    console.log('a버튼 클릭!');
  }
  if(dataName === 'B'){
    console.log('b버튼 클릭!');
  }
  if(dataName === 'C'){
    console.log('c버튼 클릭!');
  }
  if(dataName === 'D'){
    console.log('d버튼 클릭!');
  }
}
*/

function handleDelegation(e){
  let target = e.target;
  
  let li = target.closest('li')
  
  if(!li) return;

  let className = attr(li,'class');
  let dataName = attr(li,'data-name');

  if(className === 'home'){
    console.log('홈 실행!');
  }
}

container.addEventListener('click', handleDelegation);


/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */