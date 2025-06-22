import express from "express";
import cors from "cors";
import studentRoutes from "./routes/students.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("API de Estudiantes funcionando!");
});

app.use("/api", studentRoutes);

app.get("/api/error-test", (req, res, next) => {
  try {
    // Forzamos error
    throw new Error("Este es un error de prueba intencionado.");
  } catch (error) {
    next(error);
  }
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`API Server corriendo en http://localhost:${PORT}`);
});

export default app;
