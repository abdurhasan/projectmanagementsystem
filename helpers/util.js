const { Pool } = require('pg')
// const pool = new Pool({
//   user: 'abdurhasan',
//   host: 'localhost',
//   database: 'pmsdb',
//   password: 'admin',
//   port: 5432
// })
const pool = new Pool({
  user: 'xwpexfmpbztdrz',
  host: 'ec2-23-21-171-25.compute-1.amazonaws.com',
  database: 'd5e40v0i3on02s',
  password: '8adf36c74b330684c8f77ed63ac2101dcd920b9604d796ab189696e705d57205',
  port: 5432
})




module.exports = {
    isLogged : (req, res, next) => {
      if(req.session.user){
        next();
      }else{
        res.redirect('/login');
      }
    },
    pool:pool      
  }
  