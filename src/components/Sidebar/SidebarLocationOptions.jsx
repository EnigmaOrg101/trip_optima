import classes from './SidebarLocationOptions.module.scss'
import ToggleSwitch from '../Misc/ToggleSwitch'
import useLocationStore from '../../store/locationStore'

const SidebarLocationOptions = () => {
  const setAvoidHighways = useLocationStore((state) => state.setAvoidHighways)

  const setAvoidTolls = useLocationStore((state) => state.setAvoidTolls)

  const avoidTolls = useLocationStore((state) => state.avoidTolls)
  const avoidHighways = useLocationStore((state) => state.avoidHighways)

  const highwayHandler = () => {
    setAvoidHighways(!avoidHighways)
  }

  const tollsHandler = () => {
    setAvoidTolls(!avoidTolls)
  }

  return (
    <div className={classes['sidebar__options']}>
      <div className={classes.heading}>Misc options</div>
      <div className={classes['options']}>
        <div className={classes['options__item']}>
          <h3 className={classes['options__item-text']}>Avoid highways</h3>
          <ToggleSwitch onClick={highwayHandler} />
        </div>
        <div className={classes['options__item']}>
          <h3 className={classes['options__item-text']}>Avoid tolls</h3>
          <ToggleSwitch onClick={tollsHandler} />
        </div>
      </div>
    </div>
  )
}

export default SidebarLocationOptions
