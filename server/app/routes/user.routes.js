const {authJwt} = require('../middleware')
const user = require('../controller/user.controller')
const router = require("express").Router();


module.exports = function(app){
    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
      });

      

    app.get("/api/test/all",user.allAccess);

    app.get('/api/test/user',
    
      [authJwt.verifyToken],
  
    user.userBoard);

    
  app.get(
    "/api/test/admin",
 [ authJwt.verifyToken, authJwt.isAdmin],
    user.adminBoard);


    app.use([authJwt.verifyToken,authJwt.isAdmin])

    router.post("/",user.create);

    router.get("/",user.findAll);

    router.put("/:id",authJwt.verifyToken,user.update);

    router.delete("/:id",user.delete);


    app.use('/api/users',router)
}