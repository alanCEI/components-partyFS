const UNSPLASH_API_URL = "https://api.unsplash.com";

export const getPhotos = async (req, res, next) => {
  try {
    // El tema de la búsqueda "office"
    const query = "office";
    const count = 10; // 10 imágenes
    const url = `${UNSPLASH_API_URL}/photos/random?query=${query}&count=${count}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`;

    const unsplashResponse = await fetch(url);

    if (!unsplashResponse.ok) {
      throw new Error("Error al obtener las imágenes de Unsplash");
    }

    const photos = await unsplashResponse.json();

    res.status(200).json({
      success: true,
      data: photos,
    });
  } catch (error) {
    next(error);
  }
};
