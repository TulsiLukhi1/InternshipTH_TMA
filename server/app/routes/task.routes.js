module.exports = function(app){
    const task = require("../controller/task.controller.js")

    var router = require("express").Router();

    router.post("/",task.create);

    router.get("/",task.findAll);

    router.put("/:id",task.update);

    router.delete("/:id",task.delete);


    app.use('/api/tasks',router)

}