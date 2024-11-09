const express = require('express');
const cors = require('cors');
const app = express();
const createConnection = require('./db/db');
const transaction = require('./routes/transaction')

require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use('/api', transaction);


const server = () => {
  createConnection();
  app.listen(4000, () => {
    console.log('listening on port ' + 4000);
  });
};

server();