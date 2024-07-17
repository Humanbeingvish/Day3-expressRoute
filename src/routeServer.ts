import express from 'express';

const app = express();
const port= process.env.PORT ||3000;

app.get('/About',(req,res)=>{
    res.send("This is about page ");

})

app.get('/contact',(req,res)=>{
res.send('This is contact Page')
});

app.listen(port,()=>{
    console.log('Server Started');
    
});
