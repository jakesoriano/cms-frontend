const express = require("express")
const app = express()
const router = express.Router()

const path = __dirname + "/dist"
const port = process.env.PORT || 4000

app.use(express.static(path))

app.all("/*", function(req, res, next) {
  res.sendFile("index.html", { root: path })
})

app.listen(port, "0.0.0.0")
console.log(`Example app listening on port ${port}!`)
