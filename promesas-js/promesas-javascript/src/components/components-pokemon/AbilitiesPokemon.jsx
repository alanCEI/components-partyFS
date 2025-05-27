import { FirstLetter } from "@/config/StringCapFirstLetter";

export const AbilitiesPokemon = ({ name, is_hidden }) => {
  return (
    <div className="Ability">
      <p>{FirstLetter(name)}</p>
      <span className="hiddenTag">{is_hidden ? "Hidden" : "Standard"}</span>
    </div>
  );
};
