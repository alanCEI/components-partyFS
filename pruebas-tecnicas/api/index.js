import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import galleryRoutes from "./routes/gallery.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => res.send("API de Galería de Fotos"));
app.use("/api/gallery", galleryRoutes);
app.use(errorHandler);

if (process.env.NODE_ENV === "development") {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () =>
    console.log(`API corriendo en http://localhost:${PORT}`)
  );
}

export default app;
