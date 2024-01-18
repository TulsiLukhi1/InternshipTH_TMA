const  jwt  = require('jsonwebtoken')
const config = require('../config/auth.config')

const db = require('../models')

const User = db.user;


verifyToken = (req,res,next)=>{
    let token = req.headers['x-access-token'];

    if(!token){
        return res.status(403).send({
            message : 'No token provided !'
        });
    }


    jwt.verify(token,config.secret,(err,decoded)=>{
        if(err){
            return res.status(401).send({
                message:'Unauthorized',
            });
        }

        req.userId = decoded.id;
        console.log(req.userId);
        next()
    })
}


isAdmin = (req,res,next)=>{
    console.log(req.userId);
    User.findByPk(req.userId).then(user=>{


        if(!user){
            res.status(404).send({
                message:'user not found!'

            });
        }
        user.getRoles().then(roles=>{
            for (let i =0 ; i < roles.length ; i++){
                if(roles[i].name ==='admin'){
                    next();
                    return;
                }
            }

            res.status(403).send({
                message:'Require Admin Access!'
            });
            return;
        })
    })
}


const authJwt = {
    verifyToken: verifyToken,
    isAdmin : isAdmin
};


module.exports = authJwt;