const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body");

buttons.forEach((item)=>{
  item.addEventListener('click', (e)=>{
    
    if(e.target.id==="gray"){
     body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="blue"){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="yellow"){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="red"){
        body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="white"){
        body.style.backgroundColor=e.target.id;
    }
  })
})