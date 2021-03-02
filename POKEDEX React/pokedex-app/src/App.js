import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [wildPokemon, setWildPokemon] = useState({});

  useEffect(() => {
    encounterWildPokemon();
  }, []);

  const pokeID = () => {
    const min = Math.ceil(1);
    const max = Math.floor(151);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const encounterWildPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + pokeID())
      .then((response) => {
        console.log(response.data);
        setWildPokemon(response.data);
      });
  };

  const catchPokemon = (pokemon) => {
    setPokedex((state) => {
      const pokemonExists = state.filter((p) => pokemon.id === p.id).length > 0;

      if (!pokemonExists) {
        state = [...state, pokemon];
        state.sort(function (a, b) {
          return a.id - b.id;
        });
      }
      return state;
    });
    encounterWildPokemon();
  };

  const releasePokemon = (id) => {
    setPokedex((state) => state.filter((p) => p.id !== id));
  };

  return (
    <div className="app-wrapper">
      <header>
        <h1 className="title">React Hooks</h1>
        <h3 className="subtitle">With Pokemon</h3>
      </header>
      <section className="wild-pokemon">
        <h2>Wild Encounter</h2>
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            wildPokemon.id +
            ".png"
          }
          className="sprite"
          alt="pokemon"
        />
        <h3>{wildPokemon.name}</h3>
        <button className="catch-btn" onClick={() => catchPokemon(wildPokemon)}>
          CATCH
        </button>
      </section>
      <section className="pokedex">
        <h2>Pokedex</h2>
        <div className="pokedex-list">
          {pokedex.map((pokemon) => (
            <div className="pokemon" key={pokemon.id}>
              <img
                src={
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
                  pokemon.id +
                  ".png"
                }
                className="sprite"
                alt="pokemon"
              />
              <h3 className="pokemon-name">{pokemon.name}</h3>
              <button
                className="remove"
                onClick={() => releasePokemon(pokemon.id)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
