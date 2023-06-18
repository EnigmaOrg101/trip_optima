import classes from './RadiusInput.module.scss'
import { useState } from 'react'
import useRushStore from '../../store/rushStore'

const RadiusInput = () => {
  const [radius, setRadius] = useState(5000)
  const setRushRadius = useRushStore((state) => state.setRushRadius)

  return (
    <form>
      <input
        className={classes.input}
        type="number"
        min={1000}
        max={70000}
        placeholder="Show within radius"
        value={radius}
        onChange={(e) => {
          setRadius(e.target.value)
          setRushRadius(e.target.value)
        }}
      />
    </form>
  )
}

export default RadiusInput
