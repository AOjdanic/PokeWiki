import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { useContext } from "react";
import SearchContext from "../context/search-context";

/* eslint-disable react-refresh/only-export-components */
function Home() {
  const { searchIsOn, searchResults, sorting } = useContext(SearchContext);
  const { page } = useParams();
  const { results: pokemons } = useLoaderData();

  return (
    <>
      <Search />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3  justify-items-center gap-y-14">
        {!searchIsOn &&
          pokemons.map((pokemon) => (
            <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
              <Card pokemon={pokemon} />
            </Link>
          ))}

        {searchIsOn &&
          searchResults !== "empty" &&
          sorting === "default" &&
          searchResults?.map((pokemon) => (
            <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
              <Card pokemon={pokemon} />
            </Link>
          ))}

        {searchIsOn &&
          searchResults !== "empty" &&
          sorting === "ascending" &&
          searchResults
            ?.slice()
            .sort((a, b) => {
              if (b.name > a.name) return -1;

              if (b.name < a.name) return 1;

              return 0;
            })
            .map((pokemon) => (
              <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
                <Card pokemon={pokemon} />
              </Link>
            ))}

        {searchIsOn &&
          searchResults !== "empty" &&
          sorting === "descending" &&
          searchResults
            ?.slice()
            .sort((a, b) => {
              if (b.name > a.name) return 1;

              if (b.name < a.name) return -1;

              return 0;
            })
            .map((pokemon) => (
              <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
                <Card pokemon={pokemon} />
              </Link>
            ))}
      </div>
      {searchIsOn && searchResults === "empty" && (
        <p className="text-6xl text-orange-50 bg-orange-950 p-10 text-center rounded-3xl mx-auto max-w-100">
          ⚠️ There are no pokemons with that name.
        </p>
      )}
      {!searchIsOn && <Pagination page={page} />}
    </>
  );
}

export default Home;

export async function loader({ params }) {
  try {
    const { page } = params;

    if (isNaN(page))
      throw new Error(`⚠️ Page can only be a number! Please try again`);

    if (page > 36 || page < 1)
      throw new Error(`⚠️Requested page does not exist! Please try again`);

    let offset = (page - 1) * 24;

    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=24`
    );

    if (!res.ok) {
      const message = await res.text();
      throw new Error(
        `The requested resource is not available. Please try again. (server says: ${message})`
      );
    }

    const pokemons = await res.json();

    return pokemons;
  } catch (err) {
    throw new Error(err.message);
  }
}
