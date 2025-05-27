// CSS
import "@/css/DragonMonster.css";
import "@/css/RandomUser.css";
import "@/css/Pokemon.css";
import "@/css/Footer.css";
// Pages
import RandomUser from "@/pages/RandomUser";
import DragonMonster from "@/pages/DragonMonster";
import Pokemon from "@/pages/Pokemon";

function App() {
  return (
    <div className="App">
      <header className="appHeader">
        <h1 className="h1">
          <strong>API's</strong>
        </h1>
        <p>
          <b>API's con React</b>
        </p>
      </header>
      <main className="appMain">
        <section className="apiSection">
          <h2 className="h2">Usuario Aleatorio</h2>
          <RandomUser />
        </section>

        <section className="apiSection">
          <h2 className="h2">Dragón</h2>
          <DragonMonster />
        </section>

        <section className="apiSection">
          <h2 className="h2">Pokémon</h2>
          <Pokemon />
        </section>
      </main>
      <footer className="appFooter">
        <p>
          Creado por Alan Smallpage
        </p>
      </footer>
    </div>
  );
}

export default App;
