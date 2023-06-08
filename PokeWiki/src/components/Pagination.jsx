import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Pagination({ page }) {
  let navigate = useNavigate();
  page *= 1;

  const goToPage = (e) => navigate(`/pokemons/${e.target.textContent}`);
  return (
    <div>
      {page === 36 && <button onClick={goToPage}>{page - 2}</button>}
      {page > 1 && <button onClick={goToPage}>{page - 1}</button>}
      <button onClick={goToPage}>{page}</button>
      {page < 36 && <button onClick={goToPage}>{page + 1}</button>}
      {page === 1 && <button onClick={goToPage}>{page + 2}</button>}
    </div>
  );
}

export default Pagination;
