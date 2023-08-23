
//    const ticket=new Promise(function(resolvee, rejecte){
//      const isTicket=true;
//        if(isTicket){
//         resolvee("sucessfull promise fulfil")
//        }
//        else{
//         rejecte("error occure")
//        }
//     })

//     ticket.then((data)=>{
//         console.log(data)
//     }).catch((err)=>{
//       console.log(err)
//     })



  const makeOrder=()=>{
    return new Promise ((resolve, rejecte)=>{
        setInterval(()=>{
            let order="🗂️";
            resolve(order)
        },2000)
    })
  }

  const shipingOrder=(order)=>{
    return new Promise ((resolve, rejecte)=>{
        setInterval(()=>{
            if(order){
                let shipping="🤑";
                resolve(shipping)
            }
            else{
                rejecte("error")
            }
        },2000)
    })
  }

  const deliveryOrder=(shipping)=>{
    return new Promise ((resolve, rejecte)=>{
        setInterval(()=>{
            if(shipping){
                let delivery="😍";
                resolve(`Out for delivery ${delivery}`)
            }
            else{
                rejecte("error")
            }
        },2000)
    })
  }

  makeOrder().then((data)=>{
    console.log("Your order sucessfull",data)
    return shipingOrder(data)
  }).then((shiping)=>{
    console.log("Your order sucessfull shipping", shiping)
    return deliveryOrder(shiping)
  }).then((delivery)=>{
    console.log(delivery)
  }).catch((err)=>{
    console.log(err);
  })