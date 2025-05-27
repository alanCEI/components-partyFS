import TypeStyle from "@/components/components-pokemon/TypeStyle";

export const InfoPokemon = ({ name, sprites, height, weight, types }) => {
  return (
    <div className="mainInfo">
      <img
        src={sprites.other["official-artwork"].front_default}
        title={name}
        alt={name}
      />
      <div className="Stats">
        <p>Height: {height / 10}m</p>
        <p>Weight: {weight / 10}Kg</p>
        <div className="Types">
          {types.map(({ type }) => (
            <TypeStyle key={type.name} {...type} />
          ))}
        </div>
      </div>
    </div>
  );
};
