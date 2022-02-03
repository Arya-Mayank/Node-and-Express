const express = require('express');

const app = express();

// ----- Important methods
    // app.get
    // app.post
    // app.put
    // app.delete
    // app.all    : handling invalid requests to the server
    // app.use    : for middleware
    // app.listen


app.get('/', (req,res)=>{
    res.status(200).send('Home Page');
})

app.get('/about', (req,res)=>{
    res.status(200).send('About Page')
})

app.all('*', (req,res)=>{
    res.status(404).send('<h1>Resource not found </h1>')
})

// for all other invalid requests
app.listen(5000, ()=>{
    console.log(`server running on port 5000`);
})