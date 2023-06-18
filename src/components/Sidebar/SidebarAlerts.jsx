import classes from './SidebarAlerts.module.scss'
import useSidebarStore from '../../store/sidebarStore'
import useLocationStore from '../../store/locationStore'

const SidebarAlerts = () => {
  const setSidebarMode = useSidebarStore((state) => state.setSidebarMode)

  const setReroute = useLocationStore((state) => state.setReroute)

  const rerouteHandler = () => {
    setSidebarMode('Explore')
    setReroute(true)
  }

  return (
    <div className={classes['alerts']}>
      <h1 className={classes['alerts__header']}>Alerts</h1>
      <div className={classes['alerts__container']}>
        You are going through a high crime area. Please be careful.
      </div>
      <button onClick={rerouteHandler} className={classes['alerts__button']}>
        Check alternative routes
      </button>
    </div>
  )
}

export default SidebarAlerts
