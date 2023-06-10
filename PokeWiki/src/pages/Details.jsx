/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useNavigate } from "react-router-dom";

function Details() {
  const { id, name, height, weight, abilities, types, held_items } =
    useLoaderData();
  let navigate = useNavigate();
  return (
    <>
      {id > 1 && (
        <button
          onClick={() => navigate(`/pokemon/${id - 1}`)}
          className="btn pb-3 absolute right-3/4 top-2/4	"
        >
          <span>&larr;</span>
        </button>
      )}
      <article className="bg-orange-900 max-w-md p-8 flex justify-center flex-col items-center text-orange-100 text-3xl mx-auto rounded-2xl gap-y-8">
        <h2 className="text-6xl">{name}</h2>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
            id < 100 ? id.toString().padStart(3, "0") : id
          }.png`}
          alt="pokemon image"
        />
        <p>
          <span className="font-bold text-orange-300">Height:</span> {height}
        </p>
        <p>
          <span className="font-bold text-orange-300">Weight:</span> {weight}
        </p>
        <div
          className={`text-center ${abilities.length === 0 ? "hidden" : ""}`}
        >
          <p className="font-bold text-orange-300">Abilities:</p>
          {abilities.map(({ ability: { name } }) => (
            <p key={name}>{name}</p>
          ))}
        </div>
        <div className={`text-center ${types.length === 0 ? "hidden" : ""}`}>
          <p className="font-bold text-orange-300">Types:</p>
          {types.map(({ type: { name } }) => (
            <p key={name}>{name}</p>
          ))}
        </div>
        <div
          className={`text-center ${held_items.length === 0 ? "hidden" : ""}`}
        >
          <p className="font-bold text-orange-300">Items:</p>
          {held_items.map(({ item: { name } }) => (
            <p key={name}>{name}</p>
          ))}
        </div>
      </article>
      {id < 864 && (
        <button
          onClick={() => navigate(`/pokemon/${id + 1}`)}
          className="btn pb-3 absolute left-3/4 top-2/4"
        >
          <span>&rarr;</span>
        </button>
      )}
    </>
  );
}

export default Details;

export async function loader({ params }) {
  try {
    const { name } = params;

    // if (!isNaN(name)) throw new Error(`Please enter a valid pokemon name!`);

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
