const openModal = document.querySelector(".close-btn");
const modalPopUp = document.querySelector(".modal-popup-panel");
const bgContainer = document.querySelector(".container");
const closePopUp = document.querySelector(".close-popup-btn");
openModal.addEventListener('click',()=>{

  modalPopUp.classList.toggle('show-popup');
  bgContainer.classList.toggle('show-overlay');
});

closePopUp.addEventListener('click',()=>{
  modalPopUp.classList.toggle('show-popup');
  
  bgContainer.classList.toggle('show-overlay');
});
