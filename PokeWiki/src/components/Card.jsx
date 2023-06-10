/* eslint-disable react/prop-types */

import { HeartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

function Card({ pokemon: { name, url } }) {
  const pokeId = url.split("/").at(-2);

  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    let storageFavs = JSON.parse(localStorage.getItem("favorites"));
    setFavorite(
      storageFavs?.map((fav) => fav.name).includes(name) ? true : false
    );
  }, []);

  const selectAsFavorite = (e) => {
    e.preventDefault();
    let storageFavs = JSON.parse(localStorage.getItem("favorites"));
    console.log(storageFavs);

    if (storageFavs === null) storageFavs = [];

    setFavorite(!favorite);

    if (
      !favorite === true &&
      !storageFavs.map((fav) => fav.name).includes(name)
    ) {
      storageFavs = [...storageFavs, { name, pokeId }];
    } else if (favorite) {
      const newFavorites = storageFavs.filter((fav) => fav.name !== name);
      storageFavs = newFavorites;
    }
    localStorage.removeItem("favorites");
    localStorage.setItem("favorites", JSON.stringify(storageFavs));
  };

  return (
    <figure>
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
          pokeId < 100 ? pokeId.toString().padStart(3, "0") : pokeId
        }.png`}
        alt="Pokemon image"
      />
      <figcaption>{name}</figcaption>
      <HeartIcon
        onClick={selectAsFavorite}
        className={`h-6 w-6 ${favorite ? "fill-red-800 stroke-red-800" : ""}`}
      />
    </figure>
  );
}

export default Card;
