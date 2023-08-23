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


  const orderNow=async()=>{
    const order= await makeOrder();
    const shipping= await shipingOrder(order);
    const delivery= await deliveryOrder(shipping);
    console.log(delivery)
  }

 orderNow()