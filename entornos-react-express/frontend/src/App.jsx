import { useState, useEffect } from 'react';
import StudentCard from './components/StudentCard';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_URL = `${API_BASE_URL}/students`;

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        console.log(`Consultando API en: ${API_URL}`);
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
        }
        
        const result = await response.json();
        setStudents(result.data);

      } catch (err) {
        console.error('Error al obtener los datos:', err);
        setError('No se pudieron cargar los datos. Revisa que la API esté funcionando.');
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) {
    return <div className="loading-message">Cargando estudiantes...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="app">
      <h1 className="app-title">Lista de Estudiantes</h1>
      <div className="student-list">
        {students.length > 0 ? (
          students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))
        ) : (
          <p>No se encontraron estudiantes.</p>
        )}
      </div>
    </div>
  );
}

export default App;