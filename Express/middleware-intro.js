const express = require('express');
const app = express();

// requiring custom middleware 
const logger = require('./logger')
const authorize = require('./authorize')

// using middleware for all ports
app.use(logger);

app.get('/', (req, res) => {

    res.send(`home page`)
})

app.get('/about', (req, res) => {
    res.send(`about page`)
})

app.get('/api/products', (req, res) => {

    res.send(`products page`)})

    // using logger + authorize
app.get('/api/items',authorize,(req, res) => {
    res.send(`items page`)
})

app.listen(5000, () => {
    console.log(`server started on port 5000`);
})