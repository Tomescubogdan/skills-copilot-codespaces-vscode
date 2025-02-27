// Create web server
var express = require('express');
var app = express();

// Create a router
var router = express.Router();
router.get('/comments', function(req, res) {
  res.send('GET handler for /comments route.');
});

// Register the router
app.use('/', router);

// Start the server
app.listen(3000);

// Now, if you visit http://localhost:3000/comments in your browser, you'll see the message "GET handler for /comments route."