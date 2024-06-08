import exprees from "express"
import conncetMongoDB from "./config/dbConfig.js"
import productRouter from "./routes/productRoute.js";
import errorMiddleware from "./middleware/Error.js";
const app=exprees();
const PORT=8090


app.use(exprees.json())

app.use("/api/v1/product", productRouter)

app.use(errorMiddleware)

conncetMongoDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server runing on ${PORT}`)
    })
}).catch((err)=>{
    console.log("Connection failed mongodb!")
})
