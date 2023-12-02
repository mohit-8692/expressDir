const express = require('express');
const app = express();
let port = 8080;
app.listen(port,()=>{
    console.log("port no "+ port +" is called");
})

app.use((req,res)=>{
    console.log("new incoming request");
})

res.send("new response");

