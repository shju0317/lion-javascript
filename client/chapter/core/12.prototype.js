/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

/*
const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  eat(food){
    this.stomach.push(food);
  },
  getEat(){
    return this.stomach;
  }
}
*/

// setter, getter 사용
const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food){
    this.stomach.push(food);
  },
  get eat(){
    return this.stomach;
  }
}

const tiger = {
  pattern: '호랑이무늬',
  prey:'',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }
}

tiger.__proto__ = animal; // animal 상속

const fox = {
  prey: '',
  __proto__: animal // animal 상속
}






// 생성자 함수 
function Animal(){
  this.stomach = [],
  this.legs = 4,
  this.tail = true,
  this.eat = function(food){
    this.stomach.push(food);
  }
  this.printEat = function(food){
    return this.stomach;
  }
}

const lion = new Animal(); // 객체

lion.pattern = '사자 무늬';
lion.hunt = function(target){
  this.prey = target;
  return `$[target]에게 슬금슬금 접근합니다.` 
}

const cat = new Animal();
cat.say = () => 'meaow';

const dog = new Animal();
