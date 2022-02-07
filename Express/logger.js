// creating a middleware fucntion
const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear();
    console.log(method,url,time);
    next(); //returns back to the original function
}

module.exports = logger;