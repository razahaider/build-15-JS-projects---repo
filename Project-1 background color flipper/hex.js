const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('click-me');
const colorCode = document.querySelector('.color-code');

btn.addEventListener('click',()=>{
  let hexCode = '#';

  for(var i=0;i<6;i++){
  hexCode +=hex[getRandomNo()];  
  }
  document.body.style.backgroundColor = hexCode;
  colorCode.textContent = hexCode;

});

const getRandomNo=()=>{

return Math.floor(Math.random()*hex.length);

}