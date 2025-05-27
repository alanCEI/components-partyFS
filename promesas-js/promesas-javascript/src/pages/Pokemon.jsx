import { useState, useEffect } from "react";
import { InfoPokemon } from "@/components/components-pokemon/InfoPokemon";
import { AbilitiesPokemon } from "@/components/components-pokemon/AbilitiesPokemon";
import { FirstLetter } from "@/config/StringCapFirstLetter";
import { API_ENDPOINTS } from "@/config/ApiEndPoints";


function Pokemon() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const options = { signal: controller.signal };

    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(API_ENDPOINTS.POKEMON_DITTO, options);

        if (!response.ok) throw new Error("404 not found");
        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
    return () => controller.abort();
  }, []);

  if (loading) return <div className="Loading">Cargando Ditto...</div>;
  if (error) return <div className="Error">Error: {error}</div>;
  if (!pokemon)
    return <div className="Loading">Esperando datos del Pokémon...</div>;

  return (
    <section className="pokemonSection">
      <h2>{FirstLetter(pokemon.name)}</h2>
      <div className="pokemonProfile">
        <InfoPokemon key={pokemon.name} {...pokemon} />

        <div className="Abilities">
          <h3>Abilities</h3>
          {pokemon.abilities.map(({ ability, is_hidden }) => (
            <AbilitiesPokemon
              key={ability.name}
              name={ability.name}
              is_hidden={is_hidden}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pokemon;
