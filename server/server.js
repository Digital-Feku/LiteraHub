const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000

const clientPath = path.join(__dirname, "..", 'client');

app.use(express.static(clientPath));

app.get('/', (req, res) => {
  res.sendFile(path.join( clientPath , "pages", "main.html"));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});