import classes from './HeaderLogo.module.scss'
import { Path } from '@phosphor-icons/react'

const HeaderLogo = () => {
  return (
    <div className={classes.header__logo}>
      <div className={classes['header__logo-text']}>
        {/* Trip<span>Optima</span> */}
        <Path
          style={{
            display: 'inline-block',
            verticalAlign: 'middle',
            cursor: 'pointer',
          }}
          color="#131e24"
          size={42}
          weight="duotone"
        />
      </div>
    </div>
  )
}

export default HeaderLogo
