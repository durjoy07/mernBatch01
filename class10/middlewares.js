const showinfo = (req, res, next) => {
    console.log(`methid: ${req.method}, url: ${req.originalUrl}, time: ${new Date(Date.now()).toLocaleString()}`);
    //res.end("resticated")
    next();
}

module.exports = showinfo;