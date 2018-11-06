//Install express server
const express = require('express');
const path = require('path');

const app = express();

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get('*', (req, res) => {
    res.sendFile(`./front-end/dist/index.html`); // load the single view file (angular will handle the page changes on the front-end)
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);