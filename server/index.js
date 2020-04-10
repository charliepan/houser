require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then( db =>{
    app.set('db', db);
    console.log('Connected DB be');
})

app.listen(SERVER_PORT, console.log(`${SERVER_PORT} server be on`));