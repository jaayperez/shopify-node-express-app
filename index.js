const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const request = require('request-promise');

const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const scopes = 'read_products';
const forwardingAddress = "{ngrok forwarding address}"; // Replace this with your HTTPS Forwarding address

app.get('/', (req, res) => {
  res.send('Hello Justin!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
