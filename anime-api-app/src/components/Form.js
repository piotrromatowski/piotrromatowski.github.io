import "../styles/form.css";
import React, { useEffect, useState } from "react";
import Results from "./Results";

function Form() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getResults = async () => {
      // setQuery(e.target.value);

      // fetch(`https://kitsu.io/api/edge/anime?filter[text]=${query}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //     setResults(data);
      //   });

      const response = await fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${query}`
      );
      const data = await response.json();
      // console.log(data);
      setResults(data);
    };
    getResults();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <div className="form-wrap">
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            placeholder="Wyszukaj..."
            value={search}
            onChange={updateSearch}
          />
          <button className="search-btn" type="submit" value="GO!!!">
            Search
          </button>
        </form>
      </div>
      <Results results={results.data} />
    </>
  );
}

export default Form;
