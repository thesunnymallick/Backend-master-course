const myArr=new Array();
//1) Array.push();
myArr.push(10);
myArr.push(20);
myArr.push(3);

//2) Array.pop();
  myArr.pop();


//3) Array.unshift();
myArr.unshift(2);

//4) Array.shift(); 
myArr.shift();
// console.log(myArr);

//5) Array.includes();

 const arr1=[10, 3, 5, 56, 56];
 console.log(arr1.includes(3));

 //6) Array.indexOf();
//  console.log(arr1.indexOf(56))

 // 7) Array.slice();

  const arr2=[1, 3, 45, 67,23]; // original array not modified
  const newArr=arr2.slice(1,3);// last index not count
//   console.log(newArr);

  // 8) Array.splice();
  const arr3=[1, 3, 45, 67, 23];
    
//   console.log(`splice method : ${arr3.splice(1,2)}`) // remove element
//   console.log(arr3)

  //  add element using splice method
   
    const months=["jan", "march", "april"];
    months.splice(1, 2, "feb");
  //  console.log(months);
    
// 9. Array.sort();
    // const arr4=[2,-3, 10, 10, 21];
    // console.log(arr4.sort((a, b)=>{
    //     return a-b;
    // }))

//10 Array.reverse()
 const  rev=[4,6,2,1 ];
// console.log(rev.reverse());


 // array into array
 const firstArr=[1, 2, 3];
 const secondArr=[4, 5, 6];
//   firstArr.push(secondArr)
//  console.log(firstArr[3][0])

 // Sprate operator
//  const thirdArray=[...firstArr,...secondArr]
//  console.log(thirdArray)

// Array.concat()
const allarrays=firstArr.concat(secondArr);
//console.log(allarrays);

// Array.flat();
const flatArr=[1,4, [5, 8], [10, 14], [67, 89,[95, 97]],100];

//  const userArr=flatArr.flat(Infinity);
 //console.log(userArr);
 console.log(flatArr.flat(Infinity))
 console.log(flatArr);


 // Convert to array
//  let fname ="sunny Mallick"
 console.log(Array.isArray(fname))
 const arr=Array.from(fname) // return new array
 console.log(Array.from("Raju"));
 console.log(Array.isArray(arr))