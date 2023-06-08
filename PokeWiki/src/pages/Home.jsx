import { Link, useLoaderData, useParams } from "react-router-dom";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

/* eslint-disable react-refresh/only-export-components */
function Home() {
  const { page } = useParams();
  const { results: pokemons } = useLoaderData();

  return (
    <>
      <Search />
      {pokemons.map((pokemon) => (
        <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
          <Card pokemon={pokemon} />
        </Link>
      ))}
      <Pagination page={page} />
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
