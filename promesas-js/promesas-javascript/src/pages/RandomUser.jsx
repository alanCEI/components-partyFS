import { useState, useEffect } from "react";
import { UserCard } from "@/components/components-user/UserCard";
import { API_ENDPOINTS } from "@/config/ApiEndPoints";

const USERS_PER_PAGE = 4; // era diferente el paginador en el ejercicio anterior, revise para este caso y con crear una variable USERS_PER_PAGE para la cantidad de usuarios a extraer o llamar por pagina
// modifico el path de la ruta para la paginacion como en el ejercicio anterior  

function RandomUser() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const options = { signal: controller.signal };

    const fetchUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${API_ENDPOINTS.RANDOM_USER_API}?page=${page}&results=${USERS_PER_PAGE}&seed=abc`,
          options
        );

        if (!response.ok) throw new Error("404 not found");
        const data = await response.json();
        setUsers(data.results);
        setInfo(data.info);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
    return () => controller.abort();
  }, [page]);

  const handlePrev = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading) return <div className="Loading">Cargando usuarios...</div>;
  if (error) return <div className="Error">Error: {error}</div>;

  return (
    <section className="usersSection">
      <div className="usersGrid">
        {users.map((user) => {
          const { login, ...userData } = user;
          return <UserCard key={login.uuid} {...userData} />;
        })}
      </div>

      <div className="Pager">
        <button className="pagerBtn" onClick={handlePrev} disabled={page <= 1}>
          Prev
        </button>

        <span>
          Página {page} de {info.pages}
        </span>

        <button className="pagerBtn" onClick={handleNext}>
          Next
        </button>
      </div>
    </section>
  );
}

export default RandomUser;
