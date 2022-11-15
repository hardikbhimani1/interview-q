const express = require("express");
const app = express();

app.use(express.json());


const router = require("../crud/router/router")
app.use("/data",router)


app.listen(1234,()=>{
    console.log("Server is Lisning port number is 1234")
});