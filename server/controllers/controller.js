const { Country,Report,User } = require('../models/index')
const jwt = require('jsonwebtoken')
require('dotenv').config()

class AppController{

    static login(req,res,next){
        let username = req.body.username
        let password = req.body.password
        User.findOne({where:{username:username}})
        .then(data=>{
            if(data.password = password){
                let token = jwt.sign({username:data.username,id:data.id},process.env.JWT_KEY)
                res.status(200).json({ token })
            } else{
                next({status:400,msg:'wrong email/password!'})
            }
        })
        .catch(err =>{
            next({status:500 ,msg:'internal server error!'})
        })
    }

    static getCountries(req,res,next){
        Country.findAll()
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            next({status:500 ,msg:'internal server error!'})
        })
    }

    static getReports(req,res,next){
        Report.findAll({where:{UserId:req.userData.id}})
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            next({status:500 ,msg:'internal server error!'})
        })
    }

    static addReports(req,res,next){
        let obj = {
            report : req.body.report,
            CountryId : req.body.countryid,
            UserId : req.userData.id 
        }
        Report.create(obj)
        .then(result=>{
            res.status(201).json(obj)
        })
        .catch(err=>{
            next({status:500 ,msg:'internal server error!'})
        })
    }

    static delete(req,res,next){
        let param = req.params.id
        Report.findOne({where:{id:param}})
        .then(result=>{
            return Report.destroy({where:{id:param}})
            .then(data=>{
                res.status(200).json({result,msg:'succesfully deleted'})
            })
        })
        .catch(err =>{
            next({status:500 ,msg:'internal server error!'})
        })
    }
}

module.exports = AppController