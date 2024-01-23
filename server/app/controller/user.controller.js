exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };



const db = require('../models')

const User = db.user;

const Op = db.Sequelize.Op;

exports.create = (req,res)=>{
    if(!req.body.email && !req.body.fullName){
        res.status(400).send({
            message:"Full Name and email required"
        });
        return;
    }

    const user = {
        fullName : req.body.fullName,
        email: req.body.email
    };

    User.create(user).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "Some error occured while adding developer !"
        });
    });
};


exports.findAll = (req,res)=>{
    User.findAll({
        where:{}
    }).then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while retrieving all developers"
        })
    })

}

//retrieve single object
exports.findOne = (req,res)=>{
    const id = req.params.id;
    User.findByPk(id).then(data=>{
        if(data){
            res.send(data);
        }
        else{
            res.status(404).send({
                message: `cannot find developer with id = ${id}`
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message: `Error while retriving developer with id ${id}`
        })
    })
}


exports.update = (req,res)=>{
    const id = req.params.id;
    User.update(req.body,{
        where:{id:id}
    }).then(num=>{
        if(num == 1){
            res.send({
                message:"Developer updated Successfully!"
            });
        }
        else{
            res.send({
                message: `cannot update developer with id ${id}`
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message:`Error while updating Developer details with id ${id}`
        })
    })
}


exports.delete = (req,res)=>{
    const id = req.params.id;
    User.destroy({
        where:{id:id}
    }).then(num =>{
        if(num==1){
            res.send({
                message:"Task was deleted successfully!"
            });
        }
        else{
            res.send({
                message:`Cannot delete task with id ${id}`
            })
        }
    }).catch(err=>{
        res.status(500).send({
            message:`Cannot delete Task with id ${id}`
        })
    })
}







 
