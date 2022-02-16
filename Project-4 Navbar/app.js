const navMenus = document.querySelector('.nav-menus');
const toggleButton = document.querySelector('.toggle-menu');

toggleButton.addEventListener('click',()=>{

  navMenus.classList.toggle('show-menu');
  console.log(navMenus); 
});