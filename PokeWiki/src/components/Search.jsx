import { useEffect, useState } from "react";

const findPokemonByName = async (query) => {
  try {
    if (query === "") return;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}/`);

    if (res.status === 404) return "404";

    if (!res.ok) {
      const message = await res.text();
      throw new Error(message);
    }

    const data = await res.json();

    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};

function Search() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const result = await findPokemonByName(query);
      setSearchResults(result);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);
  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for your favorite pokemon"
      />
      {searchResults === "404" && <p>No pokemon found. Please try again</p>}
      {query !== "" && searchResults !== "404" && <p>{searchResults?.name}</p>}
    </>
  );
}

export default Search;
