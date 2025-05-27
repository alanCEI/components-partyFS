import { FirstLetter } from "@/config/StringCapFirstLetter";

export const CardMonster = ({
  image,
  name,
  size,
  type,
  alignment,
  challenge_rating,
}) => {

  return (
    <div className="mainInfo">
      {image && (
        <img src={`https://www.dnd5eapi.co${image}`} title={name} alt={name} />
      )}
      <p>Nombre: {FirstLetter(name)}</p>
      <p>Tamaño: {FirstLetter(size)}</p>
      <p>Tipo: {FirstLetter(type)}</p>
      <p>Alineación: {FirstLetter(alignment)}</p>
      <p>Rating: {challenge_rating}</p>
    </div>
  );
};
