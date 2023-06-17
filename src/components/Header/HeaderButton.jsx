import classes from './HeaderButton.module.scss'
import { CaretDown, MapTrifold } from '@phosphor-icons/react'

const HeaderButton = () => {
  return (
    <>
      <div className={classes.header__user}>
        <button className={classes.header__iconbtn}>
          <MapTrifold
            className={classes['header__button-icon']}
            color="#131e24"
            size={26}
          />
          <CaretDown
            className={classes['header__button-icon']}
            color="#131e24"
            size={15}
            weight='bold'
          />
        </button>

        <div className={classes['header__user-pfp']}>
          <img src="./ss.png" alt="user" />
        </div>
      </div>
    </>
  )
}

export default HeaderButton
