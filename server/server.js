import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import './config/initdb.js'; 
import userRoutes from './routes/user.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientPath = path.join(__dirname, '..', 'client');

app.use(express.static(clientPath));
app.use(express.json());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(clientPath, 'pages', 'main.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});