import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/css/Reset.css";
import "@/css/index.css";
import "@/css/MediaQueries.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// CSS importado en el mismo orden como lo haria en vanilla JS