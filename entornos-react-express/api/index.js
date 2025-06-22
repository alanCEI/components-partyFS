import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/students.routes.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rutas '/api'
app.use('/api', studentRoutes);

app.get('/', (req, res) => {
  res.send('¡API de Estudiantes funcionando!');
});

// Dev local
app.listen(PORT, () => {
  console.log(`API funcionando en http://localhost:${PORT}`);
});

export default app;