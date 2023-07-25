/* [readystate] : 현재 상태가 어떻게 변경되었는지를 알려줌

  0: uninitalized
  1: loading
  2: loaded
  3: inertactive
  4: complete

*/

export function xhr({
  method = 'GET', 
  url = '', 
  onSuccess = null, 
  onFail = null, 
  body = null, 
  headers = {
    'Content-Type':'application.json',
    'Access-Control-Allow-Origin':'*'
  }
} = {}){ //method, url, onSuccess, onFail, body, headers

  const xhr = new XMLHttpRequest(); // XMLHttpRequest: Ajax 엔진

  xhr.open(method, url);

  Object.entries(headers).forEach(([key,value])=>{
    xhr.setRequestHeader(key, value);
  })

  // xhr.setRequestHeader(headers); // 내가 보낸 자료는 json형태야

  xhr.addEventListener('readystatechange', ()=>{ // 상태가 바뀌면 실행해줘
    
    const {status, readyState, response } = xhr;

  if(readyState === 4){
    if(status >= 200 && status < 400){ // status가 200~400 사이
       onSuccess(JSON.parse(response));
    }else{
      onFail('실패');
    }
  }
    // console.log(status);
    // console.log(readyState);
  });

  xhr.send(JSON.stringify(body)); // 문자화
}

// GET
// xhr('GET','https://jsonplaceholder.typicode.com/users',(result)=>{
//   console.log(result);
// },(err)=>{
//   console.log(err);
// },
// {
//   name:'tiger'
// })

// POST
// xhr({
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess:(result)=>{console.log(result);},
//   onFail:err => console.log(err),
//   body:{
//     name:'tiger'
//   }
// });

/* 
  1. 자바스크립트의 함수는 객체이다.
  2. 사용자(협업개발자) 입장에서 쉽게 쓸 수 있도록 하자.
  3. 설계자가 함수 안에 메서드를 넣어버리자. (메서드=객체 안에 있는 함수)
  4. xhr의 get이라는 key에 함수를 넣음 = 함수(xhr) 안에 함수(get)를 넣음.
*/

/**
 * 
 * @param {string} url  서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수 
 * @param {function} onFail 서버와 통신 실패시 실행될 콜백 함수 
 * @return server data
 */
xhr.get = (url, onSuccess, onFail)=>{
  xhr({
    url, 
    onSuccess, 
    onFail
  })
}

xhr.post = (url, body, onSuccess, onFail)=>{
  xhr({
    method: 'POST',
    url, 
    body,
    onSuccess, 
    onFail
  })
}

xhr.put = (url, body, onSuccess, onFail)=>{
  xhr({
    method: 'PUT',
    url, 
    body,
    onSuccess, 
    onFail
  })
}

xhr.delete = (url, onSuccess, onFail)=>{
  xhr({
    method: 'DELETE',
    url,
    onSuccess, 
    onFail
  })
}



