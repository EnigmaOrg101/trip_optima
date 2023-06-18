import classes from './Recommendation.module.scss'
import { Star } from '@phosphor-icons/react'

import { useEffect, useState } from 'react'

const Recommendation = () => {
  const [json, setJson] = useState([])

  const fetchPopularPlaces = () => {
    fetch('https://enigma-fastapi.clouds.nepalicloud.com/recommend_popular/5')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setJson(data)
      })
  }

  useEffect(() => {
    fetchPopularPlaces()
  }, [])

  return (
    <div className={classes.recommendation}>
      <div className={classes.heading}>Machine learning suggestions</div>
      <div className={classes.recommendation__container}>
        {json.map((item, index) => {
          return (
            <div className={classes.recommendation__card} key={index}>
              <div className={classes.recommendation__img}>
                <img src={item.small_photo} alt={item.name} />
              </div>

              <div className={classes.recommendation__info}>
                <h3>{item.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Star
                    size={16}
                    style={{
                      marginLeft: '0.5rem',
                      marginRight: '0.5rem',
                    }}
                  />
                  <p>{item.rating}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Recommendation
