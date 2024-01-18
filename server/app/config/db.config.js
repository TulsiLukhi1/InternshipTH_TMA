module.exports = {
    HOST:'localhost',
    USER:'postgres',
    PASSWORD:'Tulsi#1234',
    DB:'tmadb',
    dialect:'postgres',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idel: 10000
    }
}