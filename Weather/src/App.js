import React, { useState } from "react";

const api = {
  key: "efa2ef11f117f7485b2fca8e87a3a2f5",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `${api.base}weather?q=${query}&units=metric&APPID=${api.key}&lang=pl`
      )
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const dateBuilder = (d) => {
    let months = [
      "Styczeń",
      "Luty",
      "Marzec",
      "Kwiecień",
      "Maj",
      "Czerwiec",
      "Lipiec",
      "Sierpień",
      "Wrzesień",
      "Październik",
      "Listopad",
      "Grudzień",
    ];
    let days = [
      "Niedziela",
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "app-warm"
            : "app"
          : "app"
      }
    >
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="icon"
            ></img>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)} &#176;C
              </div>
              <div className="weather">
                {weather.weather[0].description.toUpperCase()}
              </div>
            </div>
            <div className="others">
              <div className="temp-feels">
                Temperatura odczuwalna{" "}
                <span>{Math.round(weather.main.feels_like)} &#176;C</span>
              </div>
              <div className="pressure">
                Ciśnienie <span>{weather.main.pressure} hPa</span>
              </div>
              <div className="wind-speed">
                Prędkość wiatru <span>{weather.wind.speed} m/s</span>
              </div>
            </div>
            <div className="sun">
              <div className="sunrise">
                Wschód słońca o:
                <span>
                  {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                </span>
              </div>
              <img
                className="sun-icon"
                alt="sun"
                src="https://icons-for-free.com/iconfiles/png/512/sun+sunrise+weather+icon-1320196637098579511.png"
              ></img>
              <div className="sunset">
                Zachód słońca o:
                <span>
                  {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;

// const sunriseTime = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
//   const sunsetTime = new Date(weather.sys.sunset * 1000).toLocaleTimeString();
//   // const weatherIcon = `http://openweathermap.org/img/wn/10d@${weather.weather[0].icon}.png`;
