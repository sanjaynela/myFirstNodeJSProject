const express = require('express')

const app = express()

const port = 9000

app.get('/',(req,res) => res.send('Hello World'))

//app.get('/',function(req,res){
    //res.send('Hello World')
//})

app.get('/:dynamic',function(req,res){
    const dynamic = req.params.dynamic
    res.send('Hey Sam ' + dynamic)
})

app.listen(port, () => console.log(`My app is listening at http://localhost:${port}`))

