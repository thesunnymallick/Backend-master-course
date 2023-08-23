
  let userDetails={
    userName:"suuny",
    age:23
  }

  Object.prototype.hay=function(){
    console.log("hay!");
  }

  const arr=['suuny', "raju"];

  // Array also aceess the 
//   arr.hay()

//   userDetails.hay();



// prototype inheitance 

const teacher={
    userName:"jhon",
    makeVideo:true
}

const teacherAsiscente={
   
    userName:"techer support",
    __proto__:teacher
    
}

// accesse the parent object value  in child  
// console.log(teacherAsiscente.makeVideo)

// mordent syntax
 Object.setPrototypeOf(teacherAsiscente, teacher)
 console.log(teacherAsiscente.makeVideo)