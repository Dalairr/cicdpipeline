const http = require('http');
const port = process.env.PORT || 3000;
const message = process.env.GREETING || 'Hello, CI/CD!';
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(message);
});
server.listen(port, () => console.log(`Server running on port ${port}`));
