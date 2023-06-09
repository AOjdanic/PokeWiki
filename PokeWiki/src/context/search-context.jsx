/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const SearchContext = createContext(null);

export const SearchContextProvider = ({ children }) => {
  const [searchIsOn, setSearchIsOn] = useState(false);
  const [sorting, setSorting] = useState("default");
  const [searchResults, setSearchResults] = useState([]);

  const results = {
    searchIsOn,
    setSearchIsOn,
    searchResults,
    setSearchResults,
    sorting,
    setSorting,
  };

  return (
    <SearchContext.Provider value={results}>{children}</SearchContext.Provider>
  );
};

export default SearchContext;
