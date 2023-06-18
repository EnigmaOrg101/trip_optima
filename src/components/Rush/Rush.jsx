import classes from './Rush.module.scss'
import RushButton from './RushButton'
import RushHourSelect from './RushHourSelect'
import RushLongShort from './RushLongShort'

const Rush = () => {
  return (
    <div className={classes.rush}>
      <RushLongShort />
      <RushHourSelect />
      <RushButton />
    </div>
  )
}

export default Rush
