require('dotenv').config();
const express = require('express');
const http = require('http');
const router = require('./route');
const watch = require('./watch');

const app = express();
const server = http.createServer(app);
const route = new router(app);

app.use('/', express.static('public'));

route.get('/', '/public/index.html', {teste: 'true'});

watch(server, process.env.PORT);