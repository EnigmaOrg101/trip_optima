import { useEffect, useState } from 'react'
import classes from './RushPaths.module.scss'
import { ArrowsVertical } from '@phosphor-icons/react'
import { useMap } from 'react-map-gl'

const API_LINK = `https://enigma-fastapi.clouds.nepalicloud.com/calc`

import mapboxgl from 'mapbox-gl'

const RushPaths = () => {
  const { map } = useMap()
  const [json, setJson] = useState([])

  const fetchLocation = () => {
    fetch(API_LINK)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        const randomLocations = []
        for (let i = 0; i < 5; i++) {
          const randomIndex = Math.floor(Math.random() * data.length)
          randomLocations.push(data[randomIndex])
        }
        setJson(randomLocations)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchLocation()
  }, [])

  return (
    <div className={classes.paths}>
      {json.map((item, index) => {
        return (
          <div className={classes.path} key={index}>
            <div className={classes.path__info}>
              <div className={classes.path__name}>
                {index + 1} {item.name}
              </div>
              <div className={classes.path__distance}>Lat: {item.latitude}</div>
              <div className={classes.path__time}>Lon: {item.longitude}</div>
            </div>
            <ArrowsVertical
              size={20}
              style={{
                transform: 'translateY(50%)',
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default RushPaths
