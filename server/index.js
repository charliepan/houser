require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const con = require('./controller');

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then( db =>{
    app.set('db', db);
    console.log('Connected DB be');
})

app.get('/api/houses', con.getHouses);
app.post('/api/houses', con.addHouse, con.getHouses);
app.delete('/api/houses/:id', con.deleteHouse);

app.listen(SERVER_PORT, console.log(`${SERVER_PORT} server be on`));