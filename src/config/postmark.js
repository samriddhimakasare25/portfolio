// src/config/postmark.js
var postmark = require('postmark');

// Initialize the Postmark client with the server token from environment variables
var client = new postmark.ServerClient(process.env.POSTMARK_SERVER_CLIENT);

module.exports = client;
