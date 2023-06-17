import classes from './HeaderSearch.module.scss'
import { MagnifyingGlass } from '@phosphor-icons/react'

const HeaderSearch = () => {
  return (
    <form className={classes.header__search}>
      <MagnifyingGlass color="#333333b9" size={24} />
      <input placeholder="Search for a location" type="text" />
    </form>
  )
}

export default HeaderSearch
