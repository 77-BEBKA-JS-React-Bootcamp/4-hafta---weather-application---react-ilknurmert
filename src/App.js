import React, { useState, useEffect } from 'react';
import './App.scss'
import Search from './components/Search/Search';

export default function App() {

  const [city , setCity] = useState("");
  const [search , setSearch] = useState("");
  const [weatherInfo , setweatherInfo] = useState("");

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=7620cc8104e54349b02200850211103&q=${city}&days=3&aqi=no&alerts=no`)
    .then((res) => res.json())
    .then((data) => {
      setweatherInfo(data)
    })
  })

  function handlerOnChange(event) {
    setSearch(event.target.value)
  }

  function handlerOnKeyDown(event) {
    if (event.keyCode === 13 && search.length>1) {
      setCity(event.target.value)
    }
  }


  return (
    <>
    <Search
      onChange = {event => handlerOnChange(event)}
      onKeyDown = {event => handlerOnKeyDown(event)}
      onBlur = {() => setCity(search)}
    >
    </Search>
    
    {weatherInfo.current && weatherInfo.forecast.forecastday.map((item) => {
      return(
        <>
        <div>{item.date}</div>
        <img src={`${item.day.condition.icon}`} alt="icon"></img>
        <div>{item.day.condition.text}</div>
        <div>{`${item.day.maxtemp_c}° / ${item.day.maxtemp_c}°`}</div>
        </>
      )
    })}
    </>
  )
}
