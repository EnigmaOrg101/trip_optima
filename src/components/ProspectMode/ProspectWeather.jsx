import classes from './ProspectWeather.module.scss'
import { useState, useEffect } from 'react'
import useLocationStore from '../../store/locationStore'
import {
  CloudLightning,
  CloudRain,
  CloudSnow,
  Drop,
  CloudFog,
  Wind,
  Sun,
  Cloud,
  WarningCircle,
} from '@phosphor-icons/react'

const OPENWEATHERMAP_API_KEY = '2aa324236296348473e018c0675e6e4a'

const ProspectWeather = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [weatherDescription, setWeatherDescription] = useState(null)
  const [weatherTemp, setWeatherTemp] = useState(null)

  const destinationLocation = useLocationStore(
    (state) => state.destinationLocation
  )

  const disruptiveWeather = useLocationStore((state) => state.disruptiveWeather)

  const setDisruptiveWeather = useLocationStore(
    (state) => state.setDisruptiveWeather
  )

  useEffect(() => {
    if (!destinationLocation) return
    const fetchWeatherData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${destinationLocation[1]}&lon=${destinationLocation[0]}&appid=${OPENWEATHERMAP_API_KEY}`
      )

      const data = await response.json()

      const main = data.weather[0].main
      const temp = data.main.temp
      setWeatherTemp(temp)
      const description = data.weather[0].description
      setWeatherDescription(description)

      console.log(main)
      console.log(temp)

      if (
        main === 'Rain' ||
        main === 'Snow' ||
        main === 'Thunderstorm' ||
        main === 'Drizzle' ||
        main === 'Tornado' ||
        main === 'Squall' ||
        main === 'Ash' ||
        main === 'Dust' ||
        main === 'Sand' ||
        main === 'Fog' ||
        main === 'Haze' ||
        main === 'Smoke' ||
        main === 'Mist' ||
        main === 'Overcast Clouds'
      ) {
        setDisruptiveWeather(true)
      }

      setWeatherData({
        main,
        temp,
      })
    }
    fetchWeatherData()
  }, [destinationLocation, disruptiveWeather])

  return (
    <div className={classes.prospectMode__container}>
      {weatherData && (
        <div className={classes.prospectMode__weather}>
          <div className={classes.prospectMode__icon}>
            {weatherData.main === 'Rain' && <CloudRain size={40} />}
            {weatherData.main === 'Snow' && <CloudSnow size={30} />}
            {weatherData.main === 'Thunderstorm' && (
              <CloudLightning size={40} />
            )}
            {weatherData.main === 'Drizzle' && <Drop size={40} />}
            {weatherData.main === 'Tornado' && <Wind size={40} />}
            {weatherData.main === 'Squall' && <Wind size={40} />}
            {weatherData.main === 'Ash' && <CloudFog size={40} />}
            {weatherData.main === 'Dust' && <CloudFog size={40} />}
            {weatherData.main === 'Sand' && <CloudFog size={40} />}
            {weatherData.main === 'Fog' && <CloudFog size={40} />}

            {weatherData.main === 'Haze' && <CloudFog size={40} />}
            {weatherData.main === 'Smoke' && <Wind size={40} />}
            {weatherData.main === 'Mist' && <CloudFog size={40} />}
            {weatherData.main === 'Clear' && <Sun size={40} />}
            {weatherData.main === 'Clouds' && <Cloud size={40} />}
            {weatherData.main === 'Overcast clouds' && <CloudFog size={40} />}
          </div>
          <div className={classes.prospectMode__description}>
            {weatherDescription.charAt(0).toUpperCase() +
              weatherDescription.slice(1)}
          </div>
          <div className={classes.prospectMode__temp}>
            {Math.round(weatherTemp - 273.15)}°C
          </div>
        </div>
      )}
      {disruptiveWeather ? (
        <>
          <div
            className={classes.prospectMode__disruptiveWeather}
            style={{
              backgroundColor: '#FF9494',
            }}
          >
            <WarningCircle
              size={40}
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            />
            The weather might possibly be disruptive to your journey. You can
            schedule a new journey.
          </div>
        </>
      ) : (
        <div
          className={classes.prospectMode__disruptiveWeather}
          style={{
            backgroundColor: 'lightgreen',
          }}
        >
          There are no potential hindrances along your journey.
        </div>
      )}
    </div>
  )
}

export default ProspectWeather
