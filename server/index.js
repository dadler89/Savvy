import express from 'express';
import axios from 'axios';
const app = express();
import cors from 'cors';
const pool = ('./db')



app.use(cors());
app.use(express.json());


// app.route('/lineup').get((req, res) => {
//   pool.query('SELECT * FROM accounts', (err, users) => {
//     if (err){
//       console.log(err);
//       res.status(500).json({err});
//     } else{
//       res.status(200).send({ peeps: users.rows})
//       }
//   });
// });

app.listen(8675, () => console.log('Listening on port 8675'));

axios.get(`https://statsapi.web.nhl.com/api/v1/teams`)
.then(response => console.log(response.data))



//


// const express = require('express');
// const request = require('request');
// const app = express();
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
// app.get('/jokes/random', (req, res) => {
//   request(
//     { url: 'https://joke-api-strict-cors.appspot.com/jokes/random' },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).json({ type: 'error', message: err.message });
//       }
//       res.json(JSON.parse(body));
//     }
//   )
// });
// // const PORT = process.env.PORT || 8675;
// // app.listen(PORT, () => console.log(`listening on ${PORT}`));
// app.listen(8675, () => console.log('Listening on port 8675'));
