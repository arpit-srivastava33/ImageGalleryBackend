const express=require("express");
const cors=require("cors");// In this we also installed cors dependency
const connectToMongo=require("./db");
const UploadRoute = require("./routes/UploadRoute");
const app=express();
//Connect to db
connectToMongo();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(UploadRoute);







app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
})