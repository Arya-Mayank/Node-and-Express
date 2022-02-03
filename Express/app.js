const express = require('express');
const app = express();

const {products} = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1> <a href="/api/products"> Products </a>')
})


app.get('/api/products', (req, res) => {

    // fetching only id, name and image from the product
    const newProducts = products.map((product) =>{
        const {id, name, image} = product;
        return {id, name, image};
    })

    // sending the new products json
    res.json(newProducts)

})


// get detailed product using ID
app.get('/api/products/:productID', (req, res) => {
    // find product
    const {productID} = req.params;
    const singleProduct = products.find((product)=>product.id === Number(productID));

    // product not found
    if(!singleProduct){
        res.status(404).send('<h1>Product not found</h1>');
    }
    // product found
    res.json(singleProduct);
})

app.listen(5000, ()=> {
    console.log(`server started on port 5000`);
})