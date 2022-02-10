const colors = ['green','pink', 'violet', 'aqua', 'brown','red','rgba(133,122,200)','#f152025']; 

const btn = document.getElementById('click-me');
const colorCode =  document.querySelector('.color-code');

btn.addEventListener('click',()=>{
  const randomNo = Math.floor(Math.random()*colors.length);
 
  document.body.style.backgroundColor=colors[randomNo];
  colorCode.textContent = colors[randomNo];
 
});