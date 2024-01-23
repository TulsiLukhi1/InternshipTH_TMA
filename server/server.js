const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors({
  origin : 'http://localhost:3000'
}));

app.use(express.json());

app.use(express.urlencoded({extended:true}));


const db = require('./app/models');
const Role = db.role;
db.sequelize.sync().then(() => {
    console.log('Synchronized database');
    initial();
})
function initial() {
    Role.findAll().then((roles) => {
      if (roles.length === 0) {
        Role.bulkCreate([
          {
            id: 1,
            name: 'user',
          },
          {
            id: 2,
            name: 'admin',
          },
        ]).then(() => {
          console.log('Roles created successfully');
        });
      } else {
        console.log('Roles already exist, skipping creation');
      }
    });
  }
  

app.get('/',(req,res)=>{
    res.json({message:'successfully done'})
})

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/task.routes')(app);
const PORT = process.env.PORT || 4000;


app.listen(PORT,()=>{
    console.log(`server listening on port ${PORT}`)
})