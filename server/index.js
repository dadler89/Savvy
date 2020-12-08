const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const axios = require('axios');
const MySportsFeeds = require("mysportsfeeds-node");
const MongoClient = require('mongodb').MongoClient
require('dotenv').config();


let db

const con = MongoClient.connect(`${process.env.MOGOPASS}`, (err, database) => {
  if (err) return console.log(err)
  db = database.db('Hockey')
    console.log('Connected to DataBase')
  })

const msf = new MySportsFeeds("2.0", true);

msf.authenticate(`${process.env.MSFTOKEN}`, `${process.env.MSFPASS1}`)


app.use(bodyParser.json())
app.use(cors());
app.use(express.json());

app.get('/api/hockey', (req, res) => {
  db.collection('dates').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.send({info : result})
  })
})

app.get('/api/playerStats', (req, res) => {
  db.collection('playerStats').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.send({info : result})
  })
})


app.listen(8675, () => console.log('Listening on port 8675'));

// const hockeyData = msf.getData( 'nhl', '2019-2020-regular', 'seasonal_player_stats', 'json', {});
// console.log(hockeyData);



