const express = require('express');
const app = express();
const config = require('./config');
const router = require('./route');
const port = 8000;
app.get('/',(req,res)=>{
    res.status(200).send("hello world");

})

app.use('/api', router)
app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})