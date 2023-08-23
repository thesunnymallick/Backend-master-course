// Slove Challenge


// const navBar=document.querySelector("#nav");




// //change the nabar color

// navBar.style.backgroundColor="#211522"

// //Change The first Element Color
//  navBar.lastElementChild.firstElementChild.style.color="red";




const navBar=document.querySelector("#nav");

// Change the first li and last li

navBar.lastElementChild.firstElementChild.style.color="green"
navBar.lastElementChild.lastElementChild.style.color="red"


// Change all li background color

   const allLi=document.getElementsByTagName("li");
   console.log(allLi);

   Array.from(allLi).forEach((li)=>{
      li.style.backgroundColor="orange";
      li.style.padding="10px";
      li.style.borderRadius="7px";
   })


