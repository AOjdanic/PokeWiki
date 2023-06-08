/* eslint-disable react/prop-types */
function Card({ pokemon: { name, url } }) {
  const pokeId = url.split("/").at(-2);
  return (
    <figure>
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
          pokeId < 100 ? pokeId.toString().padStart(3, "0") : pokeId
        }.png`}
        alt="Pokemon image"
      />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default Card;
