import React, { useState, useEffect } from "react";
import StudentCard from "./components/StudentCard";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = `${API_BASE_URL}/students`;

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchStudents = async () => {
      setLoading(true);
      setError(null);

      try {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },

          signal: controller.signal,
        };

        const response = await fetch(API_URL, options);

        if (!response.ok) {
          const errorData = await response.json();

          throw new Error(
            errorData.message || `Error HTTP: ${response.status}`
          );
        }

        const result = await response.json();
        setStudents(result.data);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Petición fetch cancelada.");
        } else {
          console.error("Error al obtener los datos:", err);
          setError(err.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchStudents();

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <div className="loading-message">Cargando estudiantes...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
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
