import React, { useState, useEffect } from "react";
import PhotoCard from "./components/PhotoCard";

const API_URL = `${import.meta.env.VITE_API_URL}/gallery/photos`;

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchPhotos = async () => {
      setLoading(true);
      setError(null);
      try {
        console.log(`Petición a: ${API_URL}`);
        const response = await fetch(API_URL, {
          signal: controller.signal, // De esta forma me parece mas resumido que poner options, pero no se si es recomendable
        });

        if (!response.ok) {
          throw new Error(
            "No se pudo conectar con la API."
          );
        }
        const result = await response.json();
        setPhotos(result.data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
    return () => controller.abort();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Galería de Fotos</h1>
        <p>Colección de imágenes de Unsplash</p>
      </header>
      <main>
        {loading && (
          <div className="message-container loading-message">
            Cargando imágenes...
          </div>
        )}
        {error && (
          <div className="message-container error-message">{error}</div>
        )}
        {!loading && !error && (
          <div className="photo-gallery">
            {photos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
