require('dotenv').config()
const express = require('express');

const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.json({message: "Hello from POS server!"})
})

app.listen(PORT,()=> {
    console.log(`POS server is listening on PORT ${PORT} `)
})