import classes from './Sidebar.module.scss'
import SidebarHeader from './SidebarHeader'
import SidebarInputLocation from './SidebarInputLocation'
import SidebarRouteOptions from './SidebarRouteOptions'
import SidebarSelect from './SidebarSelect'
import SidebarLocationOptions from './SidebarLocationOptions'

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <SidebarHeader />
      <SidebarInputLocation />
      <SidebarSelect />
      <SidebarRouteOptions />
      <SidebarLocationOptions />
    </aside>
  )
}

export default Sidebar
