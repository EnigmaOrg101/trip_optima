import classes from './RecommendationButton.module.scss'

const RecommendationButton = ({ onClick }) => {
  const onClickHandler = () => {
    onClick()
  }

  return (
    <button onClick={onClickHandler} className={classes.btn}>
      Recommend
    </button>
  )
}

export default RecommendationButton
