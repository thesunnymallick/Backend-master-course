

const paranet=document.querySelector(".parent")
console.log(paranet);
// childrent

console.log("The childrent : ", paranet.children)
// print all childrent
// for(let i=0; i<paranet.children.length; i++){
//     console.log( paranet.children[i]);
// }

// 
  const dayOne=document.querySelector(".day");
  // child to parant
  //console.log(dayOne.parentElement)

  // child to next child
//   console.log(dayOne.nextElementSibling);

  // craete new element :
  const NewDiv=document.createElement("div");
  console.log("The new div is", NewDiv);

  NewDiv.className="craeteDiv"
  NewDiv.id="myDiv";
  NewDiv.innerText="This div create by daynamic"

  // add div in out page
 dayOne.nextElementSibling.appendChild(NewDiv)

 // change background and color padding 
   NewDiv.style.padding="10px"
   NewDiv.style.backgroundColor="#ffff"
   NewDiv.style.color="#212121";
   NewDiv.style.borderRadius="7px";