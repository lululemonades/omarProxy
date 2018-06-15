const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const request = require('request');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/productDetails/:id', (req, res) => {
  request(`http://localhost:3001${req.url}`, (error, response, body) => {
    if (error) throw new Error(error);
    res.end(body);
  });
});

app.put('/reviews-module/reviews', (req, res) => {
  axios.put(`http://localhost:3002${req.url}`, req.body)
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      throw (err);
    });
});

app.get('/reviews/:id', (req, res) => {
  console.log(`http://localhost:3002${req.url}`);
  request(`http://localhost:3002${req.url}`, (error, response, body) => {
    if (error) throw new Error(error);
    res.end(body);
  });
});

app.get('/youMayAlsoLike/:id', (req, res) => {
  request(`http://localhost:3003${req.url}`, (error, response, body) => {
    if (error) throw new Error(error);
    res.end(body);
  });
});

app.get('/products/:id/images', (req, res) => {
  request(`http://localhost:3004${req.url}`, (error, response, body) => {
    if (error) throw new Error(error);
    res.end(body);
  });  
});  

