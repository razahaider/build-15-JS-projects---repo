import {items} from './items.js';


let allItemsBtn=``;
//const allItemsBtn = document.querySelectorAll(".nav-menu");//--this wont work here now since populatefilternames is creating this dom so need this selector afterwards
//const allItemsBtn = document.querySelectorAll('.a');
// const breakfastItemsBtn = Array.from(document.querySelectorAll('a')).find(el => el.textContent=="Breakfast");
// const lunchItemsBtn = Array.from(document.querySelectorAll('a')).find(el => el.textContent=="Lunch");
// const shakesItemsBtn = Array.from(document.querySelectorAll('a')).find(el => el.textContent=="Shakes");
// 1. on DOM load - add All items function
//2. On All button click - All items function
// 3. on each button click - category filter

document.addEventListener("DOMContentLoaded", ()=>{
  // clearItems();
   populateFilterNames();
   loadItems("All"); 
  // e.preventDefault();
}
);


const populateFilterNames = ()=>{
  const categories = items.map(item=>item.category);
  const uniqueCateg = new Set(categories);

  
  const div = document.querySelector(".nav-menu-section");
  var filterNameList=`<li><button class="nav-menu">All</button> </li>`;
  uniqueCateg.forEach((category)=>{
    
    //using template directives
    filterNameList+= `<li><button type="button" class="nav-menu">${category}</button></li>`;
    console.log(filterNameList);
  });
  div.innerHTML=filterNameList;

  //alternate way:
  // const div = document.querySelector(".nav-menu-section");
  // let liElem = document.createElement('li');
  // let btnEl = document.createElement('button');
  // btnEl.className="nav-menu";
  // btnEl.textContent="All";
  // liElem.appendChild(btnEl);
  // div.appendChild(liElem);
  //uniqueCateg.forEach((category)=>{
    // let liElem = document.createElement('li');
    // let btnEl = document.createElement('button');
    // btnEl.className="nav-menu";
    // btnEl.textContent=category;
    // liElem.appendChild(btnEl);
    // div.appendChild(liElem);
  //});
  
allItemsBtn = document.querySelectorAll(".nav-menu");


allItemsBtn.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{
    clearItems();
    let filterName=e.currentTarget.textContent;
   loadItems(filterName);
    //e.preventDefault();---not needed when using buttons only needed when using anchor tags
 });
});
 
};




// breakfastItemsBtn.addEventListener("click",(e)=>{
//   clearItems();
//   loadItems("Breakfast");
//    e.preventDefault();
// });
// lunchItemsBtn.addEventListener("click",(e)=>{
//  // e.preventDefault();
//    clearItems();
//   loadItems("Lunch");
//    e.preventDefault();
// });
// shakesItemsBtn.addEventListener("click",(e)=>{
//  // e.preventDefault();
//    clearItems();
//   loadItems("Shakes");
//    e.preventDefault();
// });

const loadItems = (cat)=>{

  if(cat!="All"){
  var filteredItems = items.filter((item)=>item.category===cat);
  }
  else{
    var filteredItems = items; //const wont work outside this block
  }

  filteredItems.forEach((item)=>{
    let outerDiv = document.createElement('div');
    outerDiv.className = 'item-container';
  
      let imgDiv = document.createElement('div');
      imgDiv.className = 'img-container';
        let imgEle =document.createElement('img');
        imgEle.src = item.img;
        imgEle.alt = 'item-image';
      imgDiv.appendChild(imgEle);
  
      let textDiv = document.createElement('div');
        textDiv.className = 'text-container';
  
        let headDiv = document.createElement('div');
          headDiv.className="item-head";
          let itemNameDiv = document.createElement('div');
            itemNameDiv.className="item-name";
            itemNameDiv.textContent=item.name;
  
          let itemPriceDiv = document.createElement('div');
            itemPriceDiv.className="item-price";
            itemPriceDiv.textContent=item.price;
  
          let itemLineDiv = document.createElement('div');
            itemLineDiv.className="item-underline";
  
        headDiv.appendChild(itemNameDiv);
        headDiv.appendChild(itemPriceDiv);
        headDiv.appendChild(itemLineDiv);
  
        let descriptionDiv = document.createElement('div');
          descriptionDiv.className="item-description";
          descriptionDiv.textContent=item.description;
  
          textDiv.appendChild(headDiv);
          textDiv.appendChild(descriptionDiv);
      
      outerDiv.appendChild(imgDiv);
      outerDiv.appendChild(textDiv);
      document.getElementById("main-container").appendChild(outerDiv);
      

  });
 
};

const clearItems = ()=>{
  const mainEle = document.getElementById("main-container");
  const clearMainEle = document.createElement('main');
  clearMainEle.id="main-container";
  document.body.removeChild(mainEle);
  document.body.insertBefore(clearMainEle, document.getElementsByTagName("script")[0]);
  
}