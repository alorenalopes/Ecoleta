const express = require("express")
const server = express()
const db = require("./database/db")

server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true,
})

server.get("/", (req, res) => {
    return res.render("index.html")
})


server.post("/save-point", (req, res) => {
    
    console.log(req.body)

    const query = `INSERT INTO places (image, name, address, address2, state, city, items) 
    VALUES (?,?,?,?,?,?,?); `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.number,
        req.body.uf,
        req.body.cidade,
        req.body.items
    ]
    
    db.run(query, values, function(err){
        if(err){
            return console.log(err)
        }
        console.log("cadastrado com sucesso!")
        console.log(this)
        return res.send("create-point.html")
    })
})

server.get("/create-point", (req, res) => {
    console.log(req.query)
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    
    db.all(`SELECT * FROM places`,function(err,rows) {
        if(err){
            return console.log(err)
        }
        const total = rows.length
        return res.render("search-results.html", { places: rows, total })
    })
})
server.listen(3000)