// Block Scope
  {
    //let x=10; // can not accessed outside block
    var x=30; // // can  accessed outside block
  }
//  console.log(x);


  // Function scope

  function fun1(){
    let a=10;
    const b=20;
    var c=30;
  }

//   console.log("A VALUE",c);

//global scope

  let a=1;  // Global variable
  const b=2;
  var c=3

  function fun2(){

    console.log(a);
    console.log(b);
    console.log(c);
  }
  //fun2();


  //************************ this keyword********************

  // refer to object
  console.log("in object this keyword : ", this)
    const obj={
        name:"suuny",
        age:"23",
        displayBio: function xyz(){
            console.log(`my name is ${obj.name} and my age is ${obj.age}`)
            console.log("in object this keyword  : ", this)
        }
    }

    // obj.displayBio();


function thisObj(){
    console.log("in function this object : ", this);
}

console.log(this);