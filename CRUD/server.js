const express=require("express")
require("./utils/config");
const customers=require("./schema/customer")
const app=express();
const PORT=8000


  app.use(express.json())

// create customers
app.post("/api/customer/create", async(req, res)=>{
    // create customers
    const data= new customers(req.body)
    const result= await data.save()
    res.send(result)

})

// get all customers
app.get("/api/customers/all", async(req, res)=>{
    const allCustomer= await customers.find()
    res.send(allCustomer)
})

// update customer
app.put("/api/customer/update/:id", async(req, res)=>{
    
    console
    const updateCustomer= await customers.updateOne({_id:req.params.id}, {$set:{
        name:req.body.name,
        email:req.body.email,
        age: req.body.age,
        gender:req.body.gender,
        phoneNo: req.body.phoneNo,
        address1:req.body.address1,
        address2:req.body.address2,
        pinCode:req.body.pinCode,
    }})
    res.send(updateCustomer)
})

// Delete customer
app.delete("/api/customer/delete/:id", async(req, res)=>{
  const deleteData=await customers.deleteOne({_id:req.params.id})
  res.send(deleteData)
})

// Server start
app.listen(PORT, ()=>{
    console.log(`Server listing PORT ${PORT}`)
})