/* global gsap */

import { 
  tiger,
  delayP,
  insertLast, 
  getNode as $, 
  changeColor,
  renderSpinner,
  renderUserCard,
  renderEmptyCard,
  getNode,
  getNodes,
  attr,
  clearContents,
 } from './lib/index.js';

// [phase-1]
// 1. tiger 함수를 사용해서 user를 가져와 주세요.
// 2. 함수 안으로 넣기
// 3. 유저 데이터 랜더링 
//      - html template을 만든다. 
//      - 유저 data를 넘겨주기.
//      - inserLast 사용하기.
// 4. 함수 분리 하기 



// 에러가 발생 했을 때 
// empty svg를 생성하고 랜더링 해주세요 


const userCardInner = $('.user-card-inner');

async function renderUserList(){
  renderSpinner(userCardInner)
  try{

    await delayP({timeout:2000});

    gsap.to('.loadingSpinner',{
      opacity:0,
      onComplete(){
        $('.loadingSpinner').remove();
      }
    })
    const response = await tiger.get('http://localhost:3000/users')
    const userData = response.data;

    userData.forEach((item)=> renderUserCard(userCardInner,item))

    changeColor('.user-card');

    gsap.to('.user-card',{
      x:0,
      opacity:1,
      stagger:0.1
    })
  }

  catch(err){
    console.log( err );
    renderEmptyCard(userCardInner)
    // location.href = '404.html'
  }
}


renderUserList()

function handleDelete(e){
  const button = e.target.closest('button');
  const article = e.target.closest('article');
  
  if(!article || !button) return;
  
  //console.log(article.dataset.index);
  const id = attr(article,'data-index').slice(5);
  
  tiger.delete(`http://localhost:3000/users/${id}`)
  .then(()=>{
    // 컨텐츠 항목 전체 지우기
    clearContents(userCardInner);
    renderUserList();
  })
}

userCardInner.addEventListener('click', handleDelete)