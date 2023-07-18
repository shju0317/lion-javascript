function getAttr(node, prop){
  if(typeof node === 'string'){
    node = getNode(node); // 문자를 받아서 element node를 반환
  }

  return node.getAttribute(prop);
}


function setAttr(node, prop, value){
  if(typeof node === 'string'){
    node = getNode(node); // 문자를 받아서 element node를 반환
  }

  if(typeof prop !== 'string'){ // 전달받은 prop의 타입이 string이 아니라면 Error
    throw new TypeError('setAttr 함수의 두번째 인수는 문자타입어야 합니다.');
  }

  if(!node[prop] && prop !== 'class' && prop !== 'title'){
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}


function attr(node, prop, value){
  if(!value){ // getter
    return getAttr(node, prop);
  }else{  // setter
   setAttr(node, prop, value);
  }

  // return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

const arrowAttr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);
