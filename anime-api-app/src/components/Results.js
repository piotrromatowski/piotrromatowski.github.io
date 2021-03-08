import "../styles/results.css";
import React from "react";

function Results({ results = [] }) {
  console.log(results);

  return (
    <>
      <h1>Anime</h1>
      <div className="movies">
        {results.length > 0
          ? results.map((result) => (
              <div key={result.id} className="singleMovie">
                <h2>{result.attributes.titles.en_jp}</h2>
                <h3>{result.attributes.titles.ja_jp}</h3>
                <ul>
                  <li>Data wydania: {result.attributes.startDate}</li>
                  <li>Ilość odcinków: {result.attributes.episodeCount}</li>
                </ul>
                <div className="poster-text">
                  <p>{result.attributes.description}</p>
                  <img src={result.attributes.posterImage.small} alt=""></img>
                </div>
              </div>
            ))
          : "Pusto tu... wyszukaj coś"}
      </div>
    </>
  );
}

export default Results;
