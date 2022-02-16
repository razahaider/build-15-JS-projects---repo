import users from './users.json' assert { type: "json" };

//const Toggle = document.querySelector('.fa-angle-left');

const toggle = document.querySelectorAll(".fa-solid ");
let currentIndex = 0;
let personImg = document.getElementById("person-img");
let img = document.getElementsByTagName('img');
let author = document.querySelector('.author'); 
let designation = document.querySelector('.designation');
let reviews = document.querySelector('.reviews');

window.addEventListener('DOMContentLoaded',(e)=>{
  changeRandom(0);

});

toggle.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
  if(e.currentTarget.classList.contains("fa-angle-left")){
    if(currentIndex!=0){
      currentIndex -=1;

    }
    else{
      currentIndex = users.length-1;
    }
  }else{
    if(currentIndex==users.length-1){
      currentIndex=0;
  
      }
      else{
        currentIndex++;
      }
  }
  changeRandom(currentIndex);
});
});

const changeRandom = (index)=>{
  currentIndex = index;
  img[0].src=users[index].img;
  //personImg.src = users[2].img;
  author.textContent=users[index].author;
  designation.textContent=users[index].designation;
  reviews.textContent=users[index].reviews;
}
//fetch('users.json').then(results=>results.json()).then(console.log);