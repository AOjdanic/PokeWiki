import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Pagination({ page }) {
  let navigate = useNavigate();
  page *= 1;

  const goToPage = (e) => navigate(`/pokemons/${e.target.textContent}`);
  return (
    <div className="flex justify-center align-center py-6  gap-4  mt-32">
      {page === 36 && (
        <button className="btn" onClick={goToPage}>
          {page - 2}
        </button>
      )}
      {page > 1 && (
        <button className="btn" onClick={goToPage}>
          {page - 1}
        </button>
      )}
      <button className="btn shadow-inner-active" onClick={goToPage}>
        {page}
      </button>
      {page < 36 && (
        <button className="btn" onClick={goToPage}>
          {page + 1}
        </button>
      )}
      {page === 1 && (
        <button className="btn" onClick={goToPage}>
          {page + 2}
        </button>
      )}
    </div>
  );
}

export default Pagination;
