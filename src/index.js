const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use((req, res, next) => {
	req.io = io;

	next();
});
app.use(cors());
app.use(require('./routes'));
app.use('/files', express.static(path.resolve(__dirname, '..', 'upload', 'resized')));

mongoose.connect('mongodb+srv://weslley:q1w2e3r4t5@teste-pfeej.mongodb.net/test?retryWrites=true', {
	useNewUrlParser: true,
	useCreateIndex: true
});

server.listen(3333);
