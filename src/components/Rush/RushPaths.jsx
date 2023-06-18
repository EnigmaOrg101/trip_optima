import { useEffect } from 'react'
import classes from './RushPaths.module.scss'
import { ArrowsVertical } from '@phosphor-icons/react'

const API_LINK = `https://enigma-fastapi.clouds.nepalicloud.com/calc`

const json = [
  {
    lat: 27.717245,
    lng: 85.323959,
  },
  {
    lat: 27.717245,
    lng: 85.323959,
  },
  {
    lat: 27.717245,
    lng: 85.323959,
  },
  {
    lat: 27.717245,
    lng: 85.323959,
  },
]

const RushPaths = () => {
  //   const fetchLocation = () => {
  //     fetch(API_LINK)
  //       .then((res) => {
  //         return res.json()
  //       })
  //       .then((data) => {
  //         console.log(data)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })
  //   }

  //   useEffect(() => {
  //     fetchLocation()
  //   }, [])

  return (
    <div className={classes.paths}>
      {json.map((item, index) => {
        return (
          <div className={classes.path} key={index}>
            <div className={classes.path__info}>
              <div className={classes.path__name}>Path {index + 1}</div>
              <div className={classes.path__distance}>Distance: 1.2 km</div>
              <div className={classes.path__time}>Time: 10 min</div>
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
