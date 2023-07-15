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


const executeQuery = (query, arraParams) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, arraParams, (err, data) => {
                if (err) {
                    console.log("Erreur dans l'exécution de la requête");
                    reject(err);
                }
                resolve(data);
            }) 
        } catch (err) {
            reject(err);
        }
    
    })
}

module.exports = { executeQuery };