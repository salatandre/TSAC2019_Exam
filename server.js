/* const express = require("express");
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


const api = require('./routes/buses')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(__dirname, './dist/transport')));

//app.use('/api', api);
//app.use(app.router);
//routes.initialize(app);
app.use('/buses', require('./routes/buses'));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/transport/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
 */


const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Home")
});



app.use('/buses', require('./routes/buses'));
app.use('/positions', require('./routes/positions'));
app.use('/doors', require('./routes/doors'))
app.use('/data', require('./queue/sender'));




app.listen(3000);
