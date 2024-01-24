'use strict';

// ================================================================
// get all the tools we need
// ================================================================
const express = require('express');
const cors = require('cors');
const routes = require('./routes/index.js');
const port = process.env.PORT || 3654;

const app = express();
app.use(cors());
app.use((req, res, next) => {
  req.url = req.url.replace(/\/{2,}/g, '/'); // Replace multiple slashes with a single slash
  next(); // Continue to the next middleware or route
})
// ================================================================
// setup our express application
// ================================================================
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');


//Status Endpoint for Status Service
app.get("/status", (req, res) => {
  res.send({ status: "live" });
});


// ================================================================
// setup routes
// ================================================================
routes(app);

// ================================================================
// start our server
// ================================================================
app.listen(port,"0.0.0.0", function () {
  console.log('Server listening on port ' + port + '...');
});