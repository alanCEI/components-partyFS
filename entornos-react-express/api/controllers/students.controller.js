import { students } from '../db/students.js';

export const getStudents = (req, res) => {
  try {
    res.status(200).json({
      message: 'Lista de estudiantes obtenida con éxito',
      data: students,
    });
  } catch (error) {
    console.error('Error al procesar la solicitud de estudiantes:', error);
    res.status(500).json({
      message: 'Error interno del servidor',
      error: error.message,
    });
  }
};