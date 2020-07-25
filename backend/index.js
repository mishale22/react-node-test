const express = require('express');
const cors = require('cors');
require('dotenv').config();
const config = require('./config');
const posts = require('./routes/posts');
const response = require('./network/response');
const app = express();

app.use(cors());

app.use('/posts', posts);

app.get('*', (req, res) => {
  response.error(req, res, 'There is no endpoint', 404);
});

app.listen(config.port, () => {
  console.log('Express server running on port', config.port);
});
