const express = require('express');
const path = require('path');
const app = express();

//----------------------------------------------------------------------
// setting up middleware
    // express will setup all paths automatically
    // logo, css, js-logic file
app.use(express.static('./public'));


//----------------------------------------------------------------------
// No need to handle home or any requests since static takes care of it!
// home
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// })
//----------------------------------------------------------------------


// handling invalid requests
app.all('*', (req, res) => {
    res.status(404).send('<h1>Error</h1>');
})
//----------------------------------------------------------------------


app.listen(5000, ()=>{
    console.log(`server started on port 5000`);
})
