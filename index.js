const http = require('http');

const requestListener = (req, res) => {
 if (req.url.startsWith("/health")) {
  res.writeHead(200);
  res.end(JSON.stringify({ status: "OK" }));
 }
 res.writeHead(404);
 res.end();
}

const server = http.createServer(requestListener);
server.listen(8000);