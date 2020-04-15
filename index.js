'use strict';

const express = require('express');

const api = express();

api.get('/test', (req, res) => {
  console.log('GET!');
  res.status(200).send('GET request to homepage');
});

api.post('/test', (req, res) => {
  console.log('POST!');
  res.status(200).send('POST request to homepage');
});

api.put('/test', (req, res) => {
  console.log('PUT!');
  res.status(200).send('PUT request to homepage');
});

const PORT = process.env.PORT || 3001;

api.listen(PORT, () => {
	console.log(`Service started ${PORT}`);
});
