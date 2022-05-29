const {Client}=require('pg')
const client=new Client({
  host:"localhost",
  user:"postgres",
  port:5432,
  password:"root",
  database:"shop"

})

client.connect();
console.log("sucressfull connetivity");
// client.query(`select * from public."Account"
// `,(err,res)=>{
//   if(!err){
//     console.log(res.rows);
//   }
//   else{
//     console.log(err.message);
//   }
//   client.end;
// })

