
// object  literal :

const user={
    name: "sunny Mallick",
    email: "alfesunnymallick800@gmail.com",
    age:"23",
    myAge: function(){
        console.log(`i am ${this.age} yers old`)
    }
}

// console.log(user.name)
// user.myAge();

// constructor object
 function userDeatils(name, age, email){
    this.name=name;
    this.age=age;
    this.email=email
    return this
 }
 
 let persone1=    new userDeatils("sunny", 23, "alfe@example.com")
//  console.log(persone1);


  // create class and constructor 
  class vechicle{
    constructor(name){
        this.name=name;
    }
   myAge=function(age) {
       console.log(`my age is ${age}`)
  }

}

  let bike=new vechicle('ktm250')

  // Abstarction 

   function persone(fname, lname){
    this.fname=fname
    this.lname=lname

    let getDetails=function(){
       return this.fname
    }
    this.getDetails_access=function(){
        return  this.lname
    }
   }

   const persone2= new persone("sunny" ,'mallick');
//    console.log(persone2.getDetails)
//    persone2.getDetails_access();

// Example Inheritance 

class classMonitor{
    constructor (name){
        this.name=name
    }
}

class student extends classMonitor{
    constructor (name){
        super(name)
    }
}
let student1=new student ('sunny mallick')
console.log(student1.name)