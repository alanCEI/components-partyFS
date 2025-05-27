import { useState, useEffect } from "react";
import { CardMonster } from "@/components/components-monster/CardMonster";
import { AbilitiesMonster } from "@/components/components-monster/AbilitiesMonster";
import { API_ENDPOINTS } from "@/config/ApiEndPoints";

function DragonMonster() {
  const [monster, setMonster] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const options = { signal: controller.signal };

    const fetchMonster = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          API_ENDPOINTS.DND_MONSTER_ADULT_BLACK_DRAGON,
          options
        );

        if (!response.ok) throw new Error("404 not found");
        const data = await response.json();
        setMonster(data);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMonster();
    return () => controller.abort();
  }, []);

  if (loading)
    return <div className="Loading">Cargando el monstruo dragon...</div>;
  if (error) return <div className="Error">Error: {error}</div>;
  if (!monster) return <div className="Loading">Esperando datos...</div>;

  return (
    <section className="monsterSection">
      <div className="monsterProfile">
        <CardMonster key={monster.index} {...monster} />

        {monster.special_abilities && monster.special_abilities.length > 0 && (
          <div className="Abilities">
            <h3>Special Abilities</h3>

            {monster.special_abilities.map((ability) => {
              const { name, ...remainingAbilityProps } = ability;

              return (
                <AbilitiesMonster
                  key={name}
                  name={name}
                  {...remainingAbilityProps}
                />
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default DragonMonster;
