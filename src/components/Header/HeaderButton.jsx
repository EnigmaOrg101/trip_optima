import classes from './HeaderButton.module.scss'
import {
  CaretDown,
  GlobeHemisphereEast,
  MapTrifold,
} from '@phosphor-icons/react'

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
            size={14}
            style={{ marginLeft: '2px' }}
            weight="bold"
          />
        </button>
        <button className={classes.header__iconbtn}>
          <GlobeHemisphereEast
            className={classes['header__button-icon']}
            color="#131e24"
            size={26}
          />
          <CaretDown
            className={classes['header__button-icon']}
            color="#131e24"
            size={14}
            weight="bold"
            style={{ marginLeft: '2px' }}
          />
        </button>

        <div className={classes['header__user-pfp']}>
          <img src="./pfp.jpg" alt="user" />
        </div>
      </div>
    </>
  )
}

export default HeaderButton
