import classes from './Rush.module.scss'
import RushHourSelect from './RushHourSelect'

const Rush = () => {
  return (
    <div className={classes.rush}>
      <RushHourSelect />
    </div>
  )
}

export default Rush
