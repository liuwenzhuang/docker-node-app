const express = require('express');

const app = express()

const port = 8085

app.get('/', (req, res) => {
  res.end('omg hi lol')
})

app.listen(port, '0.0.0.0', () => {
  console.log(`server is on http://localhost:${port} in container, bind a host port to 8085 use like "-p 8085:8085"`)
})