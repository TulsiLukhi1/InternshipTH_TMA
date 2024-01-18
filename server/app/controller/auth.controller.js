const db = require("../models");

const config = require("../config/auth.config");

const User = db.user;
const Role = db.role;

//sequelize give large number of operators to help build complex query and its available inside Op object

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

 exports.signup =  (req, res) => {
  User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    fullName: req.body.fullName,
    developerRole: req.body.developerRole,
    programmingLang: req.body.programmingLang,
    communicationChannel: req.body.communicationChannel,
    availability: req.body.availability,
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully" });
          });
        });
      }
      else{
        user.setRoles([1]).then(()=>{
          res.send({
            message:"user was registerd successfully"
          })
        })
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(user =>{
    if(!user){
        return  res.status(404).send({message:"User not found!"})
    }

    var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
    );

    if(!passwordIsValid){
        return res.status(401).send({
            accessToken:null,
            message:"Invalid Password !"
        })
    }

    const token = jwt.sign({id:user.id},
        config.secret,
        {
            algorithm:'HS256',
            allowInsecureKeySizes : true,
            expiresIn:86400,
        });


    var authorities = []
    user.getRoles().then(roles=>{
        for(let i=0;i<roles.lenght;i++){
            authorities.push("ROLE_"+roles[i].name.toUppercase());
        }
        res.status(200).send({
            id : user.id,
            email:user.email,
            roles : authorities,
            accessToken:token
        })
    })
    
  })
};


// "fullName":"Parangi Rathod",
//     "developerRole":"FullStack Developer",
//     "programingLang":"JavaScript",
//     "communicationChannel":"Slack",
//     "availability":"9am to 6pm"