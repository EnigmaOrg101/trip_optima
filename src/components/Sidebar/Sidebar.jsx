import classes from './Sidebar.module.scss'
import SidebarHeader from './SidebarHeader'
import SidebarInputLocation from './SidebarInputLocation'

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <SidebarHeader />
      <SidebarInputLocation />
    </aside>
  )
}

export default Sidebar
