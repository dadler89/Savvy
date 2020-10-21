const express = require('express');
const app = express();
const cors = require('cors'); // Using the CORS node package because cors is a pain to use, so just use the package instead of fighting with it
const pool = require('./db');




app.use(cors());
app.use(express.json());


app.route("/api/getPosts").get((req, res) => {
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





