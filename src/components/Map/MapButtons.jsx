import { useMap } from 'react-map-gl'
import classes from './MapButtons.module.scss'
import { Plus, Minus } from '@phosphor-icons/react'

const MapButtons = () => {
  const { map } = useMap()

  const zoomInHandler = () => {
    map?.zoomIn()
  }

  const zoomOutHandler = () => {
    map?.zoomOut()
  }

  return (
    <>
      <div className={classes.map__btncontainer}>
        <div className={classes.map__buttons}>
          <button onClick={zoomInHandler} className={classes.btn}>
            <span>
              <Plus size={24} color="#222" />
            </span>
          </button>
          <span className={classes.separator}></span>
          <button onClick={zoomOutHandler} className={classes.btn}>
            <span>
              <Minus size={24} color="#222" />
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default MapButtons
