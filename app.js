const express = require('express')
const logger = require('morgan')
require('dotenv').config({path: './.env'})
const fs = require("fs");
const Helmet = require('helmet')
const {startServer} = require('./src/db/')
const routes = require('./routes')

const app = express()
const PORT = process.env.PORT || 3000

//connecting to database
startServer()

app.use(logger('dev'))
app.use(express.json())
// app.use(express.urlencoded({extended: true}))

//router middleware
app.use('/api/', routes)


//return the readme file if the home route is clicked
app.get('/', (req, res)=> {
   fs.readFile("./README.md", "utf-8", (err, result) => {
    console.log({result});
      res.send(result);
   });
});
//middleware to handle all unknown url requests
app.use('*', (req, res) =>{
    res.status(400).send('unknown url') 
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});