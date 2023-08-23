

// How to create object

 let sym=Symbol("ke1")
const obj={
    name:"Sunny Mallick",
    email:"sunnymalliclk@gmail.com",
    prodcts:["bag", "shoes", "shirt"],
    isLogeedIn:false,
    "fullname":"ALfe Sunny Mallick",
    [sym]:"mySymbol",
    myFun: ()=>{
     console.log("My function calll")
    },
    userName:function(){
     console.log(`my name is ${this.name}`)
    }
}

// console.log(obj.name);
// console.log(obj["email"])
// console.log(obj["fullname"]);
// console.log(obj[sym])

// console.log(obj.myFun())
// console.log(obj.userName())



// Nasted obj

//   const obj1={
//     id:"abcde123",
//     user:{
//         fname:"Sunny",
//         lname: "Mallick",
//     },
//     email:"alfesunnymallick"
//   }
//   console.log(obj1.user?.fname)
//   console.log(obj1.user?.lname)


// object conact
const obj1={1:"a", 2:"b"};
const obj2={3:"c", 4:"d"};

// const obj3={obj1, obj2};
const obj3={...obj1, ...obj2};
console.log(obj3)

// 
console.log(Object.keys(obj3))
console.log(Object.values(obj3));




