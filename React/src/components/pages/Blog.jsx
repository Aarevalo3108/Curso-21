import { useState, useEffect, useRef } from "react";

/*
  - useState: Este hook se utiliza para manejar el estado de los componentes funcionales en React.
  Permite declarar variables de estado y funciones para actualizarlas.

  - useEffect: Este hook se utiliza para manejar efectos secundarios en componentes funcionales.
  Permite ejecutar código después de que el componente se haya renderizado o actualizado.

  - useRef: Este hook se utiliza para crear referencias mutables que persisten durante el ciclo de vida del componente.
  Se utiliza comúnmente para acceder a elementos del DOM o almacenar valores que no requieren una nueva renderización.
*/

/**
 * @component Blog
 * @description This component fetches and displays a list of characters from the Rick and Morty API. It includes a search functionality to filter characters by name and pagination to navigate through the character list.
 */
const Blog = () => {
  const [characters, setCharacters] = useState([]);
  const input = useRef(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  if (!characters.results) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl">Loading...</h1>
      </div>
    );
  }

  const handleSearch = async () => {
    if (search) {
      await fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
        .then((response) => response.json())
        .then((data) => setSearchResults(data))
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-center">Characters blogs</h1>
      <div className="flex justify-center items-center my-4">
        <input
          type="text"
          placeholder="Search characters..."
          value={search}
          onChange={() => setSearch(input.current.value)}
          className="border border-gray-300 rounded-md p-2 w-1/2"
          ref={input}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4">
        {searchResults.results &&
          searchResults.results.map((character) => (
            <div
              key={character.id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={character.image}
                alt={character.name}
                className="rounded-full w-32 h-32 mx-auto"
              />
              <h2 className="text-xl font-bold text-center mt-2">
                {character.name}
              </h2>
              <p className="text-gray-600 text-center">{character.status}</p>
            </div>
          ))}
        {searchResults && searchResults.error && (
          <div className="text-center col-span-4">
            <h2 className="text-xl font-bold">No results found</h2>
          </div>
        )}
        {/* Display characters if no search results */}
        {!searchResults.results &&
          characters.results.map((character) => (
            <div
              key={character.id}
              className="bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={character.image}
                alt={character.name}
                className="rounded-full w-32 h-32 mx-auto"
              />
              <h2 className="text-xl font-bold text-center mt-2">
                {character.name}
              </h2>
              <p className="text-gray-600 text-center">{character.status}</p>
            </div>
          ))}
      </div>
      {!searchResults.results && (
        <div className="flex justify-center items-center gap-4 my-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 cursor-pointer"
            onClick={characters.info?.prev ? () => setPage(page - 1) : null}
            disabled={!characters.info?.prev}
          >
            Previous
          </button>
          <span className="text-lg font-bold">{page}</span>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={characters.info?.next ? () => setPage(page + 1) : null}
            disabled={!characters.info?.next}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
