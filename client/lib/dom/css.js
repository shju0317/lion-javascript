/* Class */
function addClass(node, className){
  if(typeof node === 'string') node = getNode(node);
  
  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두번째 인수는 문자 타입이어야 합니다.');
  }

  node.classList.add(className);
}


function removeClass(node, className){
  if(typeof node === 'string') node = getNode(node);
  
  if(!className){
    node.className = '';
    return;
  }

  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두번째 인수는 문자 타입이어야 합니다.');
  }

  node.classList.remove(className);
}


const toggleClass = (node, className)=>{
  if(typeof node === 'string') node = getNode(node);
  
  if(typeof className !== 'string'){
    throw new TypeError('addClass 함수의 두번째 인수는 문자 타입이어야 합니다.');
  }

  return node.classList.toggle(className);
}

/* CSS */
function setCss(node, prop, value){
  if(typeof node === 'string') node = getNode(node);

  if(!prop in document.body.style){ // 객체 안에 키 값이 있는지 확인 ⇒ in
    throw new SyntaxError('setCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }

  if(!value) throw new SyntaxError('setCss 함수의 세 번째 인수는 필수값입니다.');
  
  node.style[prop] = value; // 객체의 속성에 접근할 때 .표기법은 사용할 수 없다. ⇒ [] 사용
}


function getCss(node,prop){
  if(typeof node === 'string') node = getNode(node);

  if(!(prop in document.body.style)){
    throw new SyntaxError('getCss 함수의 두 번째 인자인 prop은 유효한 css 속성이 아닙니다.');
  }

  return getComputedStyle(node).getPropertyValue(prop);
}


function css(node, prop, value){
  // if(!value){ // getter
  //   return getCss(node, prop);
  // }else{  // setter
  //  setCss(node, prop, value);
  // }

  return !value ? getCss(node, prop) : setCss(node, prop, value);  
}
