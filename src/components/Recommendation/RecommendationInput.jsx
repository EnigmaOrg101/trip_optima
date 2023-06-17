import classes from './RecommendationInput.module.scss'

const RecommendationInput = () => {
  return (
    <form>
      <input
        className={classes.input}
        type="number"
        min={1}
        max={10}
        placeholder="No of places"
      />
    </form>
  )
}

export default RecommendationInput
