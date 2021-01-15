const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./database.db")

module.exports = db

db.serialize(() => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

    // const query = `INSERT INTO places (image, name, address, address2, state, city, items) 
    // VALUES (?,?,?,?,?,?,?); `

    // const values = [
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTvpOkWYJOEIr52cGB_6xnG2-lYmq7dIHgqjWz99IcgdFFkPXk&usqp=CAU",
    //     "EletroTrash",
    //     "Rua Graveto Marrom,Jardim América",
    //     "230",
    //     "Santa Catarina",
    //     "Rio do sul",
    //     "Resíduos ELetrônicos,Lampadas"
    // ]
    
    // db.run(query, values, function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("cadastrado com sucesso!")
    //     console.log(this)
    // })


    // db.run(`DELETE FROM places WHERE id = ?`, [11], function(err){
    //     if(err){
    //         return(err)
    //     }
    //     console.log("Deletado com sucesso")
    // })

//     db.all(`SELECT * FROM places`,function(err,rows) {
//         if(err){
//             return console.log(err)
//         }
//         console.log("registros")
//         console.log(rows)
//     })

})