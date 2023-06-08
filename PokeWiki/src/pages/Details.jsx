/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

function Details() {
  const { id, name, height, weight, abilities, types, held_items } =
    useLoaderData();
  return (
    <div>
      <p>{name}</p>
      <p>{height}</p>
      <p>{weight}</p>
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
          id < 100 ? id.toString().padStart(3, "0") : id
        }.png`}
        alt="pokemon image"
      />
      {abilities.map(({ ability: { name } }) => (
        <p key={name}>{name}</p>
      ))}
      {types.map(({ type: { name } }) => (
        <p key={name}>{name}</p>
      ))}
      {held_items.map(({ item: { name } }) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
}

export default Details;

export async function loader({ params }) {
  try {
    const { name } = params;

    if (!isNaN(name)) throw new Error(`Please enter a valid pokemon name!`);

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);

    if (!res.ok) {
      const message = await res.text();
      throw new Error(
        `⚠️Pokemon with that name doesn't exist! Please try again. (server says: ${message})`
      );
    }

    const pokemon = await res.json();

    return pokemon;
  } catch (err) {
    throw new Error(err.message);
  }
}
