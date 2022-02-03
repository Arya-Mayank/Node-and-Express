const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Error</h1>');
})

app.listen(5000, ()=>{
    console.log(`server started on port 5000`);
})
