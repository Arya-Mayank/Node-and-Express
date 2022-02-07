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

// handling queries
app.get('/api/v1/query', (req, res) => {
    const {search, limit} = req.query;
    let sortedProducts = [...products]

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length < 1){
        // res.status(200).send(`no products matched your search`)
        return res.status(200).json({success:true, data: []})
    }

    res.status(200).json(sortedProducts);
})

app.listen(5000, ()=> {
    console.log(`server started on port 5000`);
})