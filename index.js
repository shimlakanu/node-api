const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;


app.get('/',(req,res)=>{
    res.send('hello world :D');
})


app.listen(port);