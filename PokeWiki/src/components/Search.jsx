/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import SearchContext from "../context/search-context";

function Search() {
  const { setSorting, setSearchIsOn, setSearchResults, searchResults } =
    useContext(SearchContext);
  const [query, setQuery] = useState("");
  const findPokemonsByName = async () => {
    try {
      setSearchIsOn(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=864`);

      if (!res.ok) {
        const message = await res.text();
        throw new Error(
          `There is something wrong. Please try again. (server says: ${message})`
        );
      }

      const { results } = await res.json();

      const filteredPokemon = results.filter((poke) =>
        poke.name.includes(query.toLowerCase())
      );

      if (filteredPokemon.length === 0) return setSearchResults("empty");

      return setSearchResults(filteredPokemon);
    } catch (err) {
      throw new Error(err.message);
    }
  };
  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for your favorite pokemon"
      />
      {searchResults === "empty" && <p>No pokemon found. Please try again</p>}

      <div>
        <label htmlFor="none">none:</label>
        <input
          onClick={(e) => setSorting(e.target.value)}
          defaultChecked
          type="radio"
          name="sorter"
          id="none"
          value="default"
        />
        <label htmlFor="ascending">A-Z:</label>
        <input
          onClick={(e) => setSorting(e.target.value)}
          type="radio"
          name="sorter"
          id="ascending"
          value="ascending"
        />
        <label htmlFor="descending">Z-A:</label>
        <input
          onClick={(e) => setSorting(e.target.value)}
          type="radio"
          name="sorter"
          id="descending"
          value="descending"
        />
      </div>
      <button onClick={findPokemonsByName}>Search</button>
    </>
  );
}

export default Search;
