import { useState } from 'react'
import classes from './ShowNearby.module.scss'
import {
  Bed,
  Mountains,
  ForkKnife,
  BeerBottle,
  Toilet,
} from '@phosphor-icons/react'

const marginLeftStyle = {
  marginLeft: '1rem',
}

// eslint-disable-next-line react/prop-types
const SidebarButton = ({ text, icon }) => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
    console.log(active)
  }

  return (
    <button
      className={classes[active ? 'filters__btn--active' : 'filters__btn']}
      onClick={toggleActive}
    >
      <div className={classes['filters__btn-text']}>
        {icon && <icon style={marginLeftStyle} size={24} color="#333333c9" />}

        <span>{text}</span>
      </div>
    </button>
  )
}

const ShowNearby = () => {
  return (
    <div className={classes['showNearby']}>
      <div className={classes.heading}>Show nearby</div>
      <div className={classes['filters']}>
        <SidebarButton text="Accomodations" icon={Bed} />
        <SidebarButton text="Destinations" icon={Mountains} />
        <SidebarButton text="Restaurants" icon={ForkKnife} />
        <SidebarButton text="Drinking water" icon={BeerBottle} />
        <SidebarButton text="Toilets" icon={Toilet} />
      </div>
    </div>
  )
}

export default ShowNearby
