import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css';
import './App.css';



function App() {

  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=df9f7133fdb81e4bcaf61cceed393b26&units=metric`)
      .then(res => {
        setWeather({
          main: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
          temp: res.data.main.temp,
          tempFeel: res.data.main.feels_like,
          newcity : res.data.name,
          newWind : res.data.wind.speed,
        

        })
      })
      .catch(err => { console.log(err) })

  })

  const Weather = () => {
    const icon = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
    return (
      <div className="App">
      
      

     <header className="App-header">
       <h1>{weather.newcity}</h1> 
     </header>
     <main>
          <img src={icon} />
        <h2>Tempeature- {weather.temp}</h2>
        <h2>Feels Like - {weather.tempFeel}</h2>
        <h2>Weather - {weather.main}</h2>
        <h2>Wind Speed - {weather.newWind }</h2>
     
           
     </main>
     <footer>
       Page created by Resul Yuksektepe
     </footer>
       
      </div>
    )
  }



  return (
    <div className="App">
      <Weather />
    </div>
  );
}

export default App;
