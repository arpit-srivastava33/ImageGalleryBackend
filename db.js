const mongoose = require("mongoose");
require("dotenv").config();

  //Monngoose v7 no longer accepting callback and in uri if password have @ symbol replace it with %40 
const connectToMongo=()=>{
    mongoose.connect(process.env.MONGO_URI).then(
        () => {console.log("Connection successfully established!");},
        err => { console.log(err); }
      );

}

module.exports=connectToMongo;