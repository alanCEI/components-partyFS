import { students } from "../db/students.js";

export const getStudents = async (req, res, next) => {
  try {
    /* TEST de Error:
     if (true) {
       throw new Error('Error simulado al conectar con la base de datos');
      }*/
    res.status(200).json({
      success: true,
      message: "Lista de estudiantes obtenida con éxito",
      data: students,
    });
  } catch (error) {
    next(error);
  }
};
