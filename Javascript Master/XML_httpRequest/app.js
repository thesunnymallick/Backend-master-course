
const btn=document.querySelector(".btn");
const container=document.querySelector(".container");








const addContent=(data)=>{
    let htmlContent=`<div class="imgBox">
    <img src=${data?.avatar_url} alt=${data?.name}>
    </div>
    <div class="content">
       <h2>${data?.name}</h2>
       <h3>${data?.email || "No email"}</h3>
       <span>followers : ${data?.followers }</span>
       <span>Following :${data?.following} </span>
    </div>`
       const div=document.createElement('div');
       div.classList.add("box");
       div.innerHTML=htmlContent;
       container.appendChild(div);
}

const apiRequest=()=>{
    
    let url=`https://api.github.com/users/thesunnymallick`

     let xhttp=new XMLHttpRequest();

     xhttp.onreadystatechange=function(){
        if(xhttp.readyState===4){
            let data=JSON.parse(xhttp.responseText)
            addContent(data)
        }
     }

     xhttp.open("GET",url);
     xhttp.send();

}

btn.addEventListener("click", ()=>{
    apiRequest();
})