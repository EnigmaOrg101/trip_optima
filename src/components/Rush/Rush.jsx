import classes from './Rush.module.scss'
import RushButton from './RushButton'
import RushHourSelect from './RushHourSelect'
import RushLongShort from './RushLongShort'
import RushGenerate from './RushGenerate'

const Rush = () => {
  return (
    <div className={classes.rush}>
      <RushLongShort />
      <RushHourSelect />
      <RushButton />
      <RushGenerate />
    </div>
  )
}

export default Rush
