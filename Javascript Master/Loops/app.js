const arr=[10, 23, 34, 56];

for (const key in arr) {
   //console.log(arr[key])
}

const object={
    name:"suuny",
    age:23,
}
for (const iterator in object) {
   // console.log(object[iterator])
}



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


  // For Each loop

//   books.forEach((item)=>{
  
//     //console.log(item.name);


//   })


//  filter


const newArray=books.filter((item)=>{
 
      return item.genre==="Science"
})

const publishBook=books.filter((item)=>item.publish>=2000)



// Map 

// const newItem=books.map((item)=>(item.publish>=2000))
// console.log(newItem)


// Reduce

  const arr1=[1, 2, 3, 4, 5, 6,7,8, 9,10];

  const sumOfArray=arr1.reduce((acc, curr)=>(acc+curr),0)
 // console.log(sumOfArray);



// chaining 




 const myArry=[1,2,4, 5,6,7];

 const result=myArry
 .map((item)=>item+1)
 .map((item)=>item*10)
 .filter((item)=>item<50)
 .reduce((acc, curVal)=>(acc*curVal),1);
 console.log(result);


