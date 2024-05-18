
// import {express} from 'express';
const express = require('express')
require('dotenv').config()
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/facebook',(req,res)=>{
    res.send("Facebook")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login </h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})