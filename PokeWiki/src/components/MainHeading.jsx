import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import SearchContext from "../context/search-context";

function MainHeading() {
  let navigate = useNavigate();
  const { setSearchIsOn } = useContext(SearchContext);
  return (
    <header className="bg-orange-950">
      <div className="container mx-auto p-6 flex items-center justify-center ">
        <h1
          className="font-bold text-5xl text-orange-100 cursor-pointer"
          onClick={() => {
            setSearchIsOn(false);
            navigate("/");
          }}
        >
          PokeWiki
        </h1>
      </div>
    </header>
  );
}

export default MainHeading;
