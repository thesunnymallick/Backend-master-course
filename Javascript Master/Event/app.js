
// const allBox=document.querySelectorAll(".box")[0];
  
// const clickMe=()=>{
//     // can't access e object  in eventHandeler
//   console.log(`You click 1st box`)
// }
// const mouseOver=()=>{
//     console.log(`Mouse over tigger`)
// }
// const mouseOut=()=>{
//     console.log(`Mouse Out tigger`)
// }

// const mouseDown=()=>{
//   console.log("Mouse Down tigger")
// }

// const keup=(e)=>{
//   console.log("key presss")
//}

//  const allBox=document.querySelectorAll(".box")[0];



//  allBox.addEventListener("click", (e)=>{
//    console.log(e.target)
//    let myDiv=e.target;
//    let button= document.createElement("button")
//    button.textContent="Click Me"
//    myDiv.appendChild(button)
//  })




const allBox=document.querySelectorAll(".allBox")[0]
// console.log(allBox)

allBox.addEventListener("click", (e)=>{
  console.log(e.target.className)
   let nameCls=e.target.className;
   let RemoveDiv=e.target
   if(nameCls==="box")
   {
      RemoveDiv.remove()
   }
   else{
    console.log("Click the box")
   }
})