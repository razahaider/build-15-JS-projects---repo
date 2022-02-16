const sidebar = document.querySelector('.toggle-navbar');
const toggleMenu = document.querySelector('.toggle-menu');
const close = document.querySelector('.close-btn');

close.addEventListener('click',()=>{
  sidebar.classList.toggle('hide-toggle');
  console.log(sidebar.classList);
});

toggleMenu.addEventListener('click',()=>{
  sidebar.classList.toggle('hide-toggle');
  console.log(sidebar.classList);
});
