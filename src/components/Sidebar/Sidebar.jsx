import classes from './Sidebar.module.scss'
import SidebarHeader from './SidebarHeader'
import SidebarInputLocation from './SidebarInputLocation'
import SidebarRouteOptions from './SidebarRouteOptions'
import SidebarSelect from './SidebarSelect'
import SidebarLocationOptions from './SidebarLocationOptions'
import ShowNearby from './ShowNearby'
import useSidebarStore from '../../store/sidebarStore'
import Rush from '../Rush/Rush'
import Recommendation from '../Recommendation/Recommendation'

const Sidebar = () => {
  const sidebarMode = useSidebarStore((state) => state.sidebarMode)

  return (
    <aside className={classes.sidebar}>
      <SidebarHeader />
      {sidebarMode === 'Location' && (
        <>
          <SidebarInputLocation />
          <SidebarSelect />
          <SidebarRouteOptions />
          <SidebarLocationOptions />
          <ShowNearby />
        </>
      )}
      {sidebarMode === 'Rush' && <Rush />}
      {sidebarMode === 'Recommend' && <Recommendation />}
    </aside>
  )
}

export default Sidebar
