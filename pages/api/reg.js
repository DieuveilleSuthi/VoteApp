const { createPool } = require("mysql");

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "2000Dieuveille@",
    port: 3306,
    database: "mastercamp"
});

pool.getConnection((err) => {
    if (err){
        console.log("Erreur de connection à la base de donnée !");
    }
    console.log("Connecté à la base de données MySQL !");
});

export default function handler(req, res) {
   // res.status(200).json({ name: 'John Doe' })
  const userID = req.body.userID;
  const email = req.body.email;
  const password = req.body.password;

  console.log(userID, email, password);
  
 

  pool.query(
    "insert into mastercamp.users (userID, password, hasVoted, email) value (?, sha(?), 0, ?)",
    [userID, password, email],
    (err, result) => {

        if (err){
            res.send({err: err})
        } else {
            if(result) {
                res.send({result})
            }
        }
        
    }
  );
  }