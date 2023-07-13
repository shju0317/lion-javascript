function earth(){
  
  let water = true;
  let apple = {
    founder:'Steve Jobs',
    ceo:'Tim Cook',
    product: ['iphone','macbook','macStudio','appleWatch']
  }
  let gravity = 10;

  // return (value) => {
  return function (value){
    // console.log( apple );
    gravity = value;
    
  }
}

const ufo = earth()

ufo(5)