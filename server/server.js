const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const request = require('request');

app.use(bodyParser.json());
app.use('/:id', express.static('public'));
app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});



app.get('/productDetails/:id', (req, res) => {
  request(`http://18.219.25.187${req.url}`, (error, response, body) => {
    if (error) throw new Error(error);
    res.end(body);
  });
});

app.put('/reviews-module/reviews', (req, res) => {
  axios.put(`http://54.183.143.240${req.url}`, req.body)
    .then(() => {
      res.status(204).end();
    })
    .catch((err) => {
      throw (err);
    });
});

app.get('/reviews-module/reviews/:id', (req, res) => {
  request(`http://54.183.143.240${req.url}`, (error, response, body) => {
    if (error) throw new Error(error);
    res.end(body);
  });
});

app.get('/youMayAlsoLike/:id', (req, res) => {
  request(`http://18.188.58.255${req.url}`, (error, response, body) => {
    if (error) throw new Error(error);
    res.end(body);
  });
});

app.get('/images/:id', (req, res) => {
  request(`http://138.197.208.221${req.url}`, (error, response, body) => {
    if (error) throw new Error(error);
    res.end(body);
  });  
});  

