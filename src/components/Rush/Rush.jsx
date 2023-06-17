import classes from './Rush.module.scss'
import RushButton from './RushButton'
import RushHourSelect from './RushHourSelect'

const Rush = () => {
  return (
    <div className={classes.rush}>
      <RushHourSelect />
      <RushButton />
    </div>
  )
}

export default Rush
