const db = require('../models')

const Task = db.tasks;

const Op = db.Sequelize.Op;

exports.create = (req,res)=>{
    if(!req.body.title){
        res.status(400).send({
            message:"Task can not be empty!"
        });
        return;
    }

    const task = {
        title:req.body.title,
        assignedTo : req.body.assignedTo,
        status : req.body.status,
        dueDate : req.body.dueDate
    };

    Task.create(task).then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message : err.message || "Some error occured while creating Task !"
        });
    });
};


exports.findAll = (req,res)=>{
    Task.findAll({
        where:{}
    }).then(data =>{
        res.send(data);
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Some error occured while retrieving tasks"
        })
    })

}

//retrieve single object
exports.findOne = (req,res)=>{
    const id = req.params.id;
    Task.findByPk(id).then(data=>{
        if(data){
            res.send(data);
        }
        else{
            res.status(404).send({
                message: `cannot find task with id = ${id}`
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message: `Error while retriving task with id ${id}`
        })
    })
}


exports.update = (req,res)=>{
    const id = req.params.id;
    Task.update(req.body,{
        where:{id:id}
    }).then(num=>{
        if(num == 1){
            res.send({
                message:"Task updated Successfully!"
            });
        }
        else{
            res.send({
                message: `cannot update task with id ${id}`
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message:`Error while updating task with id ${id}`
        })
    })
}


exports.delete = (req,res)=>{
    const id = req.params.id;
    Task.destroy({
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




