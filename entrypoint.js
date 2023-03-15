require('dotenv').config();
const express = require('express');
const http = require('http');
const router = require('./environment/route');
const watch = require('./environment/watch');

const app = express();
const server = http.createServer(app);
const route = new router(app);

app.use('/', express.static('public'));

route.get('/', 'index.html', {teste: 'true'});
route.get('/page', 'page.html', {teste: 'true'});

watch(server, process.env.PORT);