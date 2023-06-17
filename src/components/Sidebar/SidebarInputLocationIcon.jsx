import classes from './SidebarInputLocationIcon.module.scss'
import { MapPin, DotOutline, Flag } from '@phosphor-icons/react'

const SidebarInputLocationIcon = () => {
  return (
    <div className={classes['sidebar__input-switch']}>
      <MapPin
        size={20}
        weight="duotone"
        color="#131e22"
        className={classes['icon']}
      />
      <DotOutline
        size={14}
        weight="bold"
        color="#131e22"
        className={classes['icon']}
      />
      <DotOutline
        size={14}
        weight="bold"
        color="#131e22"
        className={classes['icon']}
      />
      <DotOutline
        size={14}
        weight="bold"
        color="#131e22"
        className={classes['icon']}
      />
      <Flag
        size={20}
        weight="duotone"
        color="#131e22"
        className={classes['icon']}
      />
    </div>
  )
}

export default SidebarInputLocationIcon
