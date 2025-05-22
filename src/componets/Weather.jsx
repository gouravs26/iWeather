import React, { useEffect, useState } from 'react'
import CurrentWeather from './CurrentWeather';
import axios from 'axios';
const Weather = () => {
  const [city, setCity] = useState("kolkata")
  const [searchCity, setSearchCity] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [locationData, setLocationData] = useState("")
  const [loading, setLoading] = useState(false)
  const [lat, setLat] = useState(null)
  const [lon, setLon] = useState(null)
  const [country, setCountry] = useState("")
  const [stateName, setStateName] = useState("")
  const [main, setMain] = useState("")
  const [desc, setDesc] = useState("")
  const [temp, setTemp] = useState("")
  const [feels, setfeels] = useState("")
  const [tempMin, setTempMin] = useState("")
  const [tempMax, setTempMax] = useState("")
  const [pressure, setPressure] = useState("")
  const [humidity, sethumidity] = useState("")
  const [seaLevel, setSeaLevel] = useState("")
  const [grndLevel, setGrndLevel] = useState("")
  const [visibility, setVisibility] = useState("")
  const [windSpeed, setWindSpeed] = useState("")
  const [sunrise, setSunrise] = useState("")
  const [sunset, setSunset] = useState("")

  const props = {
    city,
    searchCity,
    weatherData,
    locationData,
    loading,
    lat,
    lon,
    country,
    stateName,
    main,
    desc,
    temp,
    feels,
    tempMin,
    tempMax,
    pressure,
    humidity,
    seaLevel,
    grndLevel,
    visibility,
    windSpeed,
    sunrise,
    sunset
  }
//   const API_KEY = "fe6b4d0897565dd4f8123477f40a0730";
  const handleChange= (e)=>{
    console.log(e.target.value)
    setSearchCity(e.target.value)
  }
  const onSearch=()=>{
    setCity(searchCity)
  }
  // Fetching weather data using lat and lon received
  const fetchWeather = async (latitude, longitude) => {
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
      setWeatherData(res.data);
      setMain(res.data.weather[0].main)
      setDesc(res.data.weather[0].description)
      setTemp(res.data.main.temp)
      setfeels(res.data.main.feels_like)
      setTempMin(res.data.main.temp_min)
      setTempMax(res.data.main.temp_max)
      setPressure(res.data.main.pressure)
      sethumidity(res.data.main.humidity)
      setSeaLevel(res.data.main.sea_level)
      setGrndLevel(res.data.main.grnd_level)
      setVisibility(res.data.visibility)
      setWindSpeed(res.data.wind.speed)
      setSunrise(res.data.sys.sunrise)
      setSunset(res.data.sys.sunset)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data", error)
      setLoading(true)
    }
  }
  // Fetching lat and lon of given city
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}&unit=metric`);
        setLocationData(res.data);
        setLat(res.data[0].lat)
        setLon(res.data[0].lon)
        setCity(res.data[0].name)
        setCountry(res.data[0].country)
        setStateName(res.data[0].state)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching location data", error);
        setLoading(true)
      }
    }
    fetchLocation();
  }, [city])
  useEffect(() => {
    if (lat && lon) {
      fetchWeather(lat, lon);
    }
  }, [lat, lon])

  return (
    <>
      <div className="searchCity space-x-2 flex justify-center my-3">
        <input type="text" value={searchCity} onChange={(e)=>handleChange(e)} className='text-sm outline-1 rounded-2xl px-2 w-30' placeholder='Search' />
        <button className='bg-blue-500 rounded-2xl px-2 text-sm text-white' onClick={onSearch}>Search</button>
      </div>
      <CurrentWeather {...props} /></>)
}

export default Weather