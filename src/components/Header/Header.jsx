import classes from './Header.module.scss'
import HeaderSearch from './HeaderSearch'
import HeaderLogo from './HeaderLogo'
import HeaderButton from './HeaderButton'

const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderLogo />
      <HeaderSearch />
      <HeaderButton />
    </header>
  )
}

export default Header
