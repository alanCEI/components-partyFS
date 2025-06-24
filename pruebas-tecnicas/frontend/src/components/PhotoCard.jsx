const PhotoCard = ({ photo }) => {
  return (
    <div className="photo-card">
      <img
        src={photo.urls.small}
        alt={photo.alt_description || "Foto de Unsplash"}
      />
      <div className="photo-info">
        <p>
          Por{" "}
          <a
            href={photo.user.links.html}
            target="_blank"
            rel="noopener noreferrer"
          >
            {photo.user.name}
          </a>
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;
