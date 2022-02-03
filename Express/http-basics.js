const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;

    // home page
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>Home Page</h1>');
        res.end();
    }

    //about page
    if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>About Page</h1>');
        res.end();
    }

    // any other page
    else{
        // send status code 404
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }

});

server.listen(5000);