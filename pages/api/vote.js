const { createPool } = require("mysql");
var retour = false;

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Noisette972",
    port: 3306,
    database: "vote_app"
});

pool.getConnection((err) => {
    if (err){
        console.log("Erreur de connection à la base de donnée !");
    }
    console.log("Connecté à la base de données MySQL !");
});


export default function handler(req, res) {

    const candidateID =  parseInt(req.body.candidateID);
    const userID = parseInt(req.body.userID)

   
   pool.query(
    "UPDATE candidates SET votesCount = votesCount+1 WHERE candidateID = ?", [candidateID],
     (err, result) => {
 
         if (err){
            retour = false,
             res.send({err:err})
         } else {
             if(result) {
                retour = true,
                res.send({retour})
              //  res.status(201).json("Nouveau vote pris en compte");
             }
         }   
     }
   );

   
   pool.query(
    "UPDATE Users SET hasVoted = 1 WHERE userID = ?", 
    [userID],
    (err, result) => {

        if (err){
            res.send({err: err})
        } else {
            if(result.length > 0) {
                res.send({result})
            } 
        }
        
    }
  );
  
  }
   