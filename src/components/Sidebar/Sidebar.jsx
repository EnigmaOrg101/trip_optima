import classes from './Sidebar.module.scss'
import SidebarHeader from './SidebarHeader'

const Sidebar = () => {
  return <aside className={classes.sidebar}>
    <SidebarHeader />
  </aside>
}

export default Sidebar
