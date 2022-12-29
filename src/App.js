
import React from "react";
import { useState, useEffect } from "react";
import "./styles/App.scss";

function App() {
  /* STATE*/
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState("Madrid");
  const [state, setState] = useState("Madrid");

  /* API KEY AND URL*/
  const apiKey = "d9b0bcbc7a554c0817cc4931f52fe44f";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&&appid=${apiKey}&units=metric&lang=es`;

  /* USEEFFECT */

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) =>
        setApiData({
          city: data.name,
          temperature: data.main.temp,
          tempMax: data.main.temp_max,
          tempMin: data.main.temp_min,
          weather: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          clouds: data.clouds.all,
          pressure: data.main.pressure,
          // precipitation: data.precipitation.precipition.mode,
        })
      );
	
  }, [apiUrl]);

  //FUNCIÓN MANEJADORA

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };


  // HTML //

  return (
    <>
      <div className="">
        <div className="header">
          <img
            className="logo"
            src="https://clima-app-react-cse.netlify.app/static/media/logo.9a7a1073.png"
            alt="logo"
          />
          <h1 className="title">Aplicación del tiempo</h1>
        </div>
      </div>

      {/*Input de búsqueda*/}
	  <div className="">
      <div className="inputContainerBox">
        <div className="inputContainer">
          <p className="city1">Ciudad:</p>
          <form action="" onSubmit={handleSubmit}>
            <input
              className="input1"
              type="text"
              name="search"
              placeholder="Madrid"
              onChange={inputHandler}
              value={getState}
            />
          </form>

          <button className="btn" type="text" onClick={submitHandler}>
            <span>Búsqueda</span>
          </button>
        </div>
      </div>
      
        <div className="weather1">
          <article className="weatherCity">
            <p className="city">{apiData.city}</p>
            <img
              className="icon1"
              src={`http://openweathermap.org/img/wn/${apiData.icon}@2x.png`}
              alt="icono del tiempo"
            />
            <p className="temp">{apiData.temperature}°C</p>
          </article>
		  <div className="containerTemp">
			<article className="iconContainer1 min">
            <img
              alt="icono temperatura"
              className="iconTemp"
              src="https://clima-app-react-cse.netlify.app/static/media/thermometer.2ab97b66.svg"
            />
            <p className="value">{apiData.tempMin}°C </p>
            <p className="value1">Temperatura Min.</p>
          </article>
          <article className="iconContainer1">
            <img
              alt="icono temperatura"
              className="iconTemp"
              src="https://clima-app-react-cse.netlify.app/static/media/thermometer.2ab97b66.svg"
            />
            <p className="value">{apiData.tempMax}°C</p>
            <p className="value1">Temperatura Máx.</p>
          </article>
		  </div>
		  </div>

        {/* Información adicional */}

        <div className="weather2">
          <article className="iconContainer2">
            <img
              alt="icono humedad"
              className="icon"
              src="https://clima-app-react-cse.netlify.app/static/media/humidity.c0169a44.svg"
            />
            <p className="value">{apiData.humidity}%</p>
            <p className="value">Humedad</p>
          </article>

          <article className="iconContainer2">
            <img
              alt="icono presión"
              className="icon"
              src="https://clima-app-react-cse.netlify.app/static/media/pressure.be933016.svg"
            />
            <p className="value">{apiData.pressure}</p>
            <p className="value">Presión</p>
          </article>

          <article className="iconContainer2">
            <img
              alt="icono velociddad viento"
              className="icon"
              src="https://clima-app-react-cse.netlify.app/static/media/wind.6e7e2627.svg"
            />
            <p className="value">{apiData.wind}</p>
            <p className="value">km/h Vel. Viento</p>
          </article>
        </div>
      <footer className="footer">
        <p className="copyright">By Lorena Gómez Pérez</p>
      </footer>
	  </div>
    </>
  );
}


export default App;
