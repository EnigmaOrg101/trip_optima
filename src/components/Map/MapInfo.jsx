import { motion } from 'framer-motion'
import {
  NavigationArrow,
  RoadHorizon,
  SteeringWheel,
  Truck,
  PersonSimpleBike,
  PersonSimpleWalk,
  Timer,
} from '@phosphor-icons/react'
import classes from './MapInfo.module.scss'
import useLocationStore from '../../store/locationStore'

const MapInfo = () => {
  const currentLocation = useLocationStore((state) => state.currentLocation)
  const destinationLocation = useLocationStore(
    (state) => state.destinationLocation
  )

  const destinationAddress = useLocationStore(
    (state) => state.destinationAddress
  )

  const distance = useLocationStore((state) => state.distance)

  const duration = useLocationStore((state) => state.duration)

  const travelMode = useLocationStore((state) => state.travelMode)

  const itemVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 60 },
  }

  const containerTransition = {
    type: 'tween',
    duration: 0.3,
  }

  return (
    <>
      {currentLocation && destinationLocation && (
        <div className={classes['info']}>
          <div className={classes['info__container']}>
            <motion.div
              className={classes['info__container-item']}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={containerTransition}
            >
              <div className={classes['header']}>
                {travelMode.label === 'Drive' && (
                  <SteeringWheel size={30} weight="duotone" />
                )}
                {travelMode.label === 'Walk' && (
                  <PersonSimpleWalk size={30} weight="duotone" />
                )}
                {travelMode.label === 'Cycle' && (
                  <PersonSimpleBike size={30} weight="duotone" />
                )}
                {travelMode.label === 'Truck' && (
                  <Truck size={30} weight="duotone" />
                )}

                <div className={classes['value']}>
                  <h2>Mode</h2>
                  <p>{travelMode.label}</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={classes['info__container-item']}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={containerTransition}
            >
              <div className={classes['header']}>
                <NavigationArrow size={30} weight="duotone" />
                <div className={classes['value']}>
                  <h2>Destination</h2>
                  <p>
                    {destinationAddress?.length > 18
                      ? destinationAddress?.slice(0, 18) + '...'
                      : destinationAddress}
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={classes['info__container-item']}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={containerTransition}
            >
              <div className={classes['header']}>
                <RoadHorizon size={30} weight="duotone" />
                <div className={classes['value']}>
                  <h2>Distance</h2>
                  <p>{distance} km</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className={classes['info__container-item']}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={containerTransition}
            >
              <div className={classes['header']}>
                <Timer size={30} weight="duotone" />
                <div className={classes['value']}>
                  <h2>Duration</h2>
                  <p>{duration}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  )
}

export default MapInfo
