const mongoose= require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/restfulapi", {
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection setup successful")
}).catch((err)=>{
    console.log(err)
})

