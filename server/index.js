const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const axios = require('axios');
const MySportsFeeds = require("mysportsfeeds-node");
const MongoClient = require('mongodb').MongoClient
require('dotenv').config();


MongoClient.connect(`${process.env.MOGOPASS}`, { useUnifiedTopology: true })
.then(client => {
  console.log('Connected to Database')
})
.catch(error => console.error(error))

const msf = new MySportsFeeds("2.0", true);


msf.authenticate(`${process.env.MSFTOKEN}`, `${process.env.MSFPASS1}`)


app.use(bodyParser.json())
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send('hello world')
})

app.route("/api/games").get((req, res) => {
  pool.query("SELECT * FROM posts", (err, posts) => {
    if (err) {
      res.status(500).json({ err });
    } else {
      res.status(200).send({ posts: posts.rows });
    }
  });
});


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
 //   create for each for players.
  // });

// const hockeyData = msf.getData( 'nhl', '2019-2020-regular', 'game_lineup', 'json', {game: `51992`, position:"Goalie-Starter"});
// console.log(hockeyData);

