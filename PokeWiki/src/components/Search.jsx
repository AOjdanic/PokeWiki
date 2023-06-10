/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import SearchContext from "../context/search-context";
import { useNavigate } from "react-router-dom";

function Search() {
  const {
    setSorting,
    setSearchIsOn,
    setSearchResults,
    searchIsOn,
    searchResults,
  } = useContext(SearchContext);
  const [query, setQuery] = useState("");
  let navigate = useNavigate();

  const findPokemonsByName = async () => {
    try {
      if (query === "") return;

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
      <div className="flex flex-col  sm:flex-row justify-center items-center gap-4 my-8 ">
        <span className="relative max-w-50  sm:w-128 ">
          <input
            className="text-2xl py-2 px-6 rounded-lg bg-orange-400 placeholder:text-orange-50 font-semibold w-full text-orange-700 outline-0"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Find your favorite pokemon"
          />

          {searchIsOn && (
            <button
              className="btn tracking-wider absolute rounded-l-none right-0"
              onClick={() => {
                setSearchIsOn(false);
                navigate("/");
              }}
            >
              Clear
            </button>
          )}
        </span>

        <button className="btn" onClick={findPokemonsByName}>
          Search
        </button>
      </div>

      <div
        className={`flex flex-col sm:flex-row justify-center items-center gap-8 my-12 ${
          searchIsOn && searchResults !== "empty" ? "" : "invisible"
        } `}
      >
        <label className="text-orange-950 text-xl font-semibold" htmlFor="none">
          None:
        </label>
        <input
          className="accent-orange-900 scale-200 "
          onClick={(e) => setSorting(e.target.value)}
          defaultChecked
          type="radio"
          name="sorter"
          id="none"
          value="default"
        />
        <label
          className="text-orange-950 text-xl font-semibold"
          htmlFor="ascending"
        >
          A-Z:
        </label>
        <input
          className="accent-orange-900 scale-200 "
          onClick={(e) => setSorting(e.target.value)}
          type="radio"
          name="sorter"
          id="ascending"
          value="ascending"
        />
        <label
          className="text-orange-950 text-xl font-semibold"
          htmlFor="descending"
        >
          Z-A:
        </label>
        <input
          className="accent-orange-900 scale-200 "
          onClick={(e) => setSorting(e.target.value)}
          type="radio"
          name="sorter"
          id="descending"
          value="descending"
        />
      </div>
    </>
  );
}

export default Search;
