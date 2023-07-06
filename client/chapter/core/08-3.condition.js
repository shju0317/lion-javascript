/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime = '저녁';


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */
switch(thisTime){
// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'
  case MORNING:  
    console.log('뉴스 기사 글을 읽는다.');
    break;
// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'
  case LUNCH:  
    console.log('자주 가는 식당에 가서 식사를 한다');
    break;
// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'
case DINNER:  
  console.log('동네 한바퀴를 조깅한다.');
break;
// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'
case NIGHT: 
  console.log('친구에게 전화를 걸어 수다를 떤다.');
  break;
  // 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'
case LATE_NIGHT:  
case DAWN:  
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
  break;

default:
  console.log('');
  break;
}

/* switch문 → if문 변환 --------------------------------------------------- */
if(thisTime == MORNING){
  console.log('뉴스 기사 글을 읽는다.');
}else if(thisTime == LUNCH ){
  console.log('자주 가는 식당에 가서 식사를 한다');
}else if(thisTime == DINNER ){
  console.log('동네 한바퀴를 조깅한다.');
}else if(thisTime == NIGHT){
  console.log('친구에게 전화를 걸어 수다를 떤다.');
}else if(thisTime == LATE_NIGHT || thisTime == DAWN ){
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
}else{
  console.log('오우');
}

/* switch vs. if -------------------------------------------------------- */

// 0: '일' ... 6: '토'
// 1. 랜덤한 수 생성
// 2. 조건비교 switch case
    // const day = Math.floor(Math.random()*7);
    // switch(day){
    //   case 0: console.log('일'); break;
    //   case 1: console.log('월'); break;
    //   case 2: console.log('화'); break;
    //   case 3: console.log('수'); break;
    //   case 4: console.log('목'); break;
    //   case 5: console.log('금'); break;
    //   case 6: console.log('토'); break;
    // }
// 3. 해당 결과 출력
// 4. 함수 만들기 = 쪼개기

  function getRandom(n){
    return Math.floor(Math.random() * n);
  }

  const day = getRandom(7);

  function getDay(dayValue){
    switch(day){
      case 0: return '일';
      case 1: return '월';
      case 2: return '화';
      case 3: return '수';
      case 4: return '목';
      case 5: return '금';
      case 6: return '토';
    }
  }

  console.log( getDay(day) );

function isWeekend(dayValue){
  const today = getDay(getRandom(dayValue));

  if(today === '토' || today === '일'){
    return true;
  }else{
    return false;
  }

  // return today.includes('토') ? '토요일' : today.includes('일') ? '일요일' : '평일';
}
  
const today = isWeekend(7);
console.log(today);
