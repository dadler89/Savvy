const express = require('express');
const app = express();
const cors = require('cors');
const pool = ('./db')



app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});



app.route('/dailylineup').get((req, res) => {
  pool.query('SELECT * FROM accounts', (err, users) => {
    if (err){
      console.log(err);
      res.status(500).json({err});
    } else{
      res.status(200).send({ peeps: users.rows})
      }
  });
});

app.listen(8675, () => console.log('Listening on port 8675'));
