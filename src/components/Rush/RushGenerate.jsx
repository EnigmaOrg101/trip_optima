import classes from './RushGenerate.module.scss'
import useSidebarStore from '../../store/sidebarStore'

const RushGenerate = () => {
  const setSidebarMode = useSidebarStore((state) => state.setSidebarMode)

  return (
    <button
      onClick={() => {
        setSidebarMode('12')
      }}
      className={classes.btn}
    >
      Plan trip
    </button>
  )
}

export default RushGenerate
