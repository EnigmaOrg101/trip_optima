import classes from './Header.module.scss'
import HeaderSearch from './HeaderSearch'
import HeaderLogo from './HeaderLogo'

const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderLogo />
      <HeaderSearch />
    </header>
  )
}

export default Header
