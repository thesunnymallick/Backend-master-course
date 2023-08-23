//  pass value  function defination or regular function
  function sumTwoValue(num1, num2){
    return num1*num2
  }

  let result= sumTwoValue(10,23);
//   console.log(result);

   // Arrow function
  const passValueChange=(num)=>{
     num="20";
    console.log(`the nam value is in fun: ${num}`)
  }

//   let num1="10";
//   passValueChange(num1)
//   console.log(num1)

  // pass array using function expression
  const passArray=function(arr){
    arr[0]=20;
  // console.log(`array 1st value is : ${arr[0]}`)
  }
  const array=[10, 23, 45];
  //passArray(array)
 // console.log(array);


 // pass object using anynomus function expresion

    const obj={
        name:"sunnyMallick",
        email:"alfesuuny@790"
    }

    const passObj=function(obj){
     console.log(`my name is ${obj.name} my email is ${obj.email}`)
    }

   // passObj(obj)

  

    // Call Back function

    //   function calculate(num1, num2, sumToNum){
    //     console.log(`calculate fun run... ${num1} and ${num2}`)
    //    return sumToNum(num1, num2)
    //   }

      
    //  const sumResult= calculate(10, 20, function(value1, value2){
    //      console.log(`Callback fun run .... ${value1} and ${value2}`)
    //     return value1+value2
    //   })

    //   console.log(`The sam value is ${sumResult}`);


    // Real Example of arrow function

     
    let arr=[1,3, 4,-3, 5, 6];

    const maxValue=(num)=>{
     return num<0
    }

    // let findResult=arr.find(maxValue)
    // console.log(findResult)

    // const printValue=(num1)=>{
    // console.log(`The value is ${num1}`)
    // }

    //  arr.forEach(printValue)


    // Return arrow function one line
     
    const fun1=(a, b)=> {return a+b};

    //return obj  using arrow fun
    const objFun=()=>(
       {
        obj:"suuny"
       }
    
      )
    console.log(fun1(10,20));
    console.log(objFun());