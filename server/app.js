'use strict';

let express = require('express');
let app     = express();

app.use( express.static(__dirname + "/../client") );


app.get('/sports', (req, res) => {
    res.json( ["Cycling", "Weightlifting"] );
});

let port = process.env.PORT || 3000;
app.listen(port, process.env.IP, () => {
    console.log('The server has estarted and running in port: ' + port);
});
