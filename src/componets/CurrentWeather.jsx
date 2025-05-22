import React from 'react'

const CurrentWeather = (props) => {
    console.log(props)
  return (
    <div className="container bg-blue-200 mx-auto w-1/2">
    <div className="weather">
      <div className="location flex space-x-2 px-2 py-2">
        <div className='flex'>
          <span className="material-symbols-outlined">
            near_me
          </span>
          <span className='font-bold'>
            {props.city}, {props.stateName}({props.country})
          </span>
        </div>
      </div>
      <div className="desc flex space-x-2 px-2">
        {/* <span className="material-symbols-outlined">
          rainy_light
        </span> */}
        {/* <span class="material-symbols-outlined">
          cloud
        </span> */}
        <span className="material-symbols-outlined">
          foggy
        </span>
        {/* <span class="material-symbols-outlined">
          clear_day
        </span> */}
        {/* <span class="material-symbols-outlined">
          rainy
        </span> */}
        {/* <span class="material-symbols-outlined">
          thunderstorm
        </span> */}
        <span>{props.main}</span>
      </div>
      {/* Detailed Description of weather */}
      <div className="main px-2 mt-4">
        <span className='font-bold'>Details</span>
        <div className='pt-1'>{props.desc.charAt(0).toUpperCase() + props.desc.slice(1)}</div>
        <ul className="grid grid-cols-2 gap-2 pt-1">
          <li className="temp">Temperature - {props.temp}</li>
          <li className="feels"> Feels like - {props.feels}</li>
          <li className="min">Min temp - {props.setTempMin}</li>
          <li className="max">Max temp - {props.tempMax}</li>
          <li className="pressure">Pressure - {props.pressure}</li>
          <li className="humidity">Humidity - {props.humidity}</li>
          <li className="sea">Sea level - {props.seaLevel}</li>
          <li className="ground">Ground level - {props.grndLevel}</li>
        </ul>
        <div className="moreDetails mt-2">
          <span className='font-bold'>Some more details</span>
          <ul className="grid grid-cols-2 py-1">
            <li className="vis">Visibility - {props.visibility}</li>
            <li className="wind">Wind speed - {props.windSpeed}</li>
            <li className="sunrise">Sunrise - {props.sunrise}</li>
            <li className="sunset">Sunset - {props.sunset}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CurrentWeather