import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const apiKey = "b06f10cb00e579e0bf5b180072113639";
  const location = "dhaka";
  useEffect(() => {
    // const url = `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`;
    // const url = `http://api.openweathermap.org/geo/1.0/zip?zip=1205,+880&appid=${apiKey}`;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
    return (
      <div>
        <p>{weather.name}</p>
        <p>{weather.main?.temp}</p>
      </div>
    );
};

export default Weather;
