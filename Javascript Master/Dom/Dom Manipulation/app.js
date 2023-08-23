// console.log(document.documentElement)

// console.log(document.body.firstChild);
// console.log(document.body.lastChild)
// console.log(document.body.firstChild)

const element=document.body.children;

// Convert array Collection
 const newArray=Array.from(element);
//console.log(newArray)

// newArray.map((item)=>console.log(item))


// const isValue=document.body.childNodes[0]===document.body.firstChild;
// console.log(document.body.firstElementChild)


//console.log(document.body.firstChild.firstChild)
// console.log(document.body.childNodes[1].nextSibling)





const mySecondBox=document.getElementsByClassName("box")[1];

mySecondBox.firstElementChild.innerHTML="Box 2"

const myThirdBox=document.querySelectorAll(".box")[2];
myThirdBox.firstElementChild.innerHTML="Box 3"
const tageH1=document.getElementsByTagName("h1");


Array.from(tageH1).forEach((item)=>{
   item.style.padding="20px 0px"
})

const myAllBox=document.querySelectorAll(".box");


// Create Button


     Array.from(myAllBox).forEach((item)=>{
        let button=document.createElement("button")
        button.textContent="Read More"
        button.style.padding='10px'
        button.style.margin="10px"
        button.style.borderRadius="20px"
        button.style.border="none"
        button.style.outline="none"
        button.style.cursor="pointer"

            // class add 
        button.setAttribute("class", "btn")
        

    
        item.append(button)
     })