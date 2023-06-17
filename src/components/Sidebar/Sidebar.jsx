import classes from './Sidebar.module.scss'
import SidebarHeader from './SidebarHeader'
import SidebarInputLocation from './SidebarInputLocation'
import SidebarRouteOptions from './SidebarRouteOptions'
import SidebarSelect from './SidebarSelect'

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <SidebarHeader />
      <SidebarInputLocation />
      <SidebarSelect />
      <SidebarRouteOptions />
    </aside>
  )
}

export default Sidebar
