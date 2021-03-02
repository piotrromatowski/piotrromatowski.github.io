import React, { useEffect, useState } from "react";

function Form() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getResults();
  }, [query]);

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
    console.log(data);
    setResults(data);
  };

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
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          placeholder="Wyszukaj..."
          value={search}
          onChange={updateSearch}
        />
        <button className="search-btn" type="submit" value="GO!!!">
          GO!!!
        </button>
      </form>
    </>
  );
}

export default Form;
