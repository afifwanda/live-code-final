const { User } = require('../models/index')

function authorization(req,res,next){
    User.findOne({where:{id:req.userData.id}})
    .then(result=>{
        if(req.userData.id = result.id){
            next()
        }
    })
    .catch(err=>{
        next({status:401 ,msg:'not authorized'})
    })
}

module.exports = authorization