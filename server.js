var http = require('http');

//Simple HTTP server with GET API that does a timeout of 2s and sends out a JSON response
http.createServer(function (req, res) {
  setTimeout(function(){
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      "id": 1,
      "message": "Sample Message"
    }));
  }, 2000);
}).listen(3000);

console.log('Server running at http://localhost:3000/');
