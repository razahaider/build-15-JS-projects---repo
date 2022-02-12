var counter = document.getElementsByClassName('counter');//not .counter
const btns = document.querySelectorAll(".btn");

btns.forEach((btn)=>{

  btn.addEventListener('click', (e)=>{
  const btnAction = e.currentTarget.textContent; //.classList
    if(btnAction=='increase'){
      counter[0].textContent=++counter[0].textContent;
      if( counter[0].textContent>0)
      counter[0].style.color='green';

    }else if(btnAction=='decrease'){
      counter[0].textContent=--counter[0].textContent;
      if( counter[0].textContent<0)
      counter[0].style.color='red';
    }else{
      
      counter[0].textContent=0;
    }
    if(counter[0].textContent==0)
    counter[0].style.color='black';
 
});
});