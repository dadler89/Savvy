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


// app.get('/hockey', (req, res) => {
//   res.send('One day Hockey stuff will be here')
// })

app.get('/hockey', (req, res) => {
  db.collection('dates').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.send({dates : result})
  })
})




app.listen(8675, () => console.log('Listening on port 8675'));

// axios.get(`https://statsapi.web.nhl.com/api/v1/teams`)
// .then(response => console.log(response.data))


  // axios.get(`https://api.mysportsfeeds.com/v2.1/pull/nhl/2020-playoff/games/20200817-TBL-CBJ/boxscore.json`,
  // {
  //   headers: {
  //     Authorization: `Basic ${process.env.MSFAPI}`
  //     }
  // })
  // .then(response => {
  //    console.log(response.data.references)
  // //  create for each for players.
  // });

// const hockeyData = msf.getData( 'nhl', '2019-2020-regular', 'game_lineup', 'json', {game: `51805`, position:"Goalie-Starter"});
// console.log(hockeyData);



// const loadBtn = document.getElementById('load')
//         loadBtn.addEventListener('click', (event) => {
//             event.preventDefault();

//             axios.get('http://localhost:8675/hockey')
//                 .then((response) => {
//                     console.log(response)
//                     const posts = document.getElementById('posts')
//                     for (post of response.data) {
//                         posts.innerHTML += `<tr><td>${post._id}</td><td>${post.title}</td><td>${post.body}</td></tr>`;
//                     }
//                 })

//         })
