import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
const app = express()
const PORT = 3000

const clientPath = path.join(path.dirname(fileURLToPath(import.meta.url)), 
  '..', 
  'client');

app.use(express.static(clientPath));

app.get('/', (req, res) => {
  res.sendFile(path.join( clientPath , "pages", "main.html"));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});