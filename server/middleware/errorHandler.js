function errorHandler(req,res,next){
    if(err.name === 'JsonWebTokenError'){
        res.status(401).json({
            'msg' : 'authentication fail'
        })
    } else{
        res.status(err.status).json(err)
    }
}

module.exports = errorHandler