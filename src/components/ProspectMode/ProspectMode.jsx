import classes from './ProspectMode.module.scss'
import ProspectWeather from './ProspectWeather'
const ProspectMode = () => {
  return (
    <div className={classes.container}>
      <div className={classes.prospectMode}>
        <div className={classes.heading}>Weather alert</div>
        <ProspectWeather />
      </div>
    </div>
  )
}

export default ProspectMode
