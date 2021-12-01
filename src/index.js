
const router = require('./routes')

const express = require('express');
const cors = require('cors');

const server = express();
const port = 3333;

server.use(express.json());

server.use(cors());
server.use(router);


server.listen(port, () => {
    console.log(`Servidor na porta http://localhost:${port}`);
});