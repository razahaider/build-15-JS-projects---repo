//const Toggle = document.querySelector('.fa-angle-left');
const toggle = document.querySelectorAll(".fa-solid ");
const body = document.querySelector('body');

body.addEventListener('DOMcontentloaded',()=>{

});

toggle.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
  console.log(e.target.classList);
  console.log(e.currentTarget.classList);
  if(e.currentTarget.classList.contains("fa-angle-left")){
   document.querySelector('.author').textContent='Scientist'; 
   document.querySelector('.designation');
   document.querySelector('.reviews');
  }else{
    
  }

});
});

//fetch('users.json').then(results=>results.json()).then(console.log);