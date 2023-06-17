import classes from './RushButton.module.scss'
import useRushStore from '../../store/rushStore'

const RushButton = () => {
  const setRushMode = useRushStore((state) => state.setRushMode)

  const handleRush = () => {
    setRushMode(true)
  }

  return (
    <div className={classes.rushButton}>
      <button onClick={handleRush} className={classes.btn}>
        Rush
      </button>
    </div>
  )
}

export default RushButton
