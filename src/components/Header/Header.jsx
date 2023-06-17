import classes from './Header.module.scss'
import HeaderLogo from './HeaderLogo'

const Header = () => {
  return (
    <header className={classes.header}>
      <HeaderLogo />
    </header>
  )
}

export default Header
