import classes from './ToggleSwitch.module.scss'

// eslint-disable-next-line react/prop-types
const ToggleSwitch = ({ onClick }) => {
  const onClickHandler = () => {
    onClick()
  }

  return (
    <label className={classes.label}>
      <input
        className={classes.input}
        type="checkbox"
        defaultChecked={false}
        onClick={onClickHandler}
      />
      <span className={classes.span} />
    </label>
  )
}

export default ToggleSwitch
