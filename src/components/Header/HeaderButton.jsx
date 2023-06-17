import classes from './HeaderButton.module.scss'
// import { CaretRight } from "@phosphor-icons/react"
import { Bell, Heart } from '@phosphor-icons/react'

const HeaderButton = () => {
  return (
    <>
      <div className={classes.header__user}>
        <button className={classes.header__iconbtn}>
          <Bell
            className={classes['header__button-icon']}
            color="#131e24"
            size={26}
          />
          <Heart
            className={classes['header__button-icon']}
            color="#131e24"
            size={26}
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
