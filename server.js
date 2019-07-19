const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Home")
});



app.use('/belts', require('./routes/belts'));
app.use('/power', require('./routes/power'));
app.use('/rates', require('./routes/rates'))
app.use('/data', require('./queue/sender'));




app.listen(3000);