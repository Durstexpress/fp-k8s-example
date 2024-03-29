const port = process.env.PORT || 3000;
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('/usr/src/app/src/index.html').pipe(res)
})


server.listen(port, () => {
 console.log(`Server running on port: ${port}`);
});
