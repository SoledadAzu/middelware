const fs = require('fs')

function logeoRuta(req,res,next){
    let url = req.url
    fs.appendFileSync('userLogs.txt'," \n usted ingreso a : " + url)
    next()
}

module.exports=logeoRuta