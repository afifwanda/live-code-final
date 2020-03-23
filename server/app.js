const express = require('express')
const app = express()
const router = require('./router/router.js')
const cors = require('cors')
const errorHandler = require('./middleware/errorHandler')
const port = 3000

app.use(cors())
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

app.use('/',router)
app.use(errorHandler)

app.listen(port,function(){
    console.log('youre listening to port ' + port)
})