import classes from './HeaderButton.module.scss'
import { MapTrifold } from '@phosphor-icons/react'
import useMapStore from '../../store/mapStore'
import Select from 'react-select'

const HeaderButton = () => {
  const setMapStyle = useMapStore((state) => state.setMapStyle)

  const options = [
    {
      value: 'mapbox://styles/mapbox/streets-v12',
      label: 'Streets',
    },
    {
      value: 'mapbox://styles/mapbox/satellite-streets-v12',
      label: 'Satellite',
    },
    {
      value: 'mapbox://styles/mapbox/outdoors-v12',
      label: 'Outdoors',
    },
    {
      value: 'mapbox://styles/mapbox/light-v11',
      label: 'Light',
    },
    {
      value: 'mapbox://styles/mapbox/dark-v11',
      label: 'Dark',
    },
  ]

  return (
    <>
      <div className={classes.header__user}>
        <div className={classes.header__select}>
          <MapTrifold
            className={classes['header__button-icon']}
            color="#131e24"
            size={26}
          />
          <Select
            id="select"
            defaultValue={options[0]}
            onChange={(e) => setMapStyle(e.value)}
            options={options}
            styles={{
              control: (provided, state) => ({
                ...provided,
                width: '100%',
                height: '4.5rem',
                padding: '0 1.5rem',
                borderRadius: '1rem',
                fontSize: '1.6rem',
                fontWeight: '500',
                color: '#131e22',
                backgroundColor: '#f0f4f5',
                border: state.isFocused
                  ? '1px solid transparent'
                  : '1px solid transparent',
                boxShadow: 'none',
                '&:hover': {
                  border: state.isFocused
                    ? '1px solid transparent'
                    : '1px solid transparent',
                },
              }),
              option: (provided, state) => ({
                ...provided,
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.6rem',
                fontWeight: '500',
                color: '#131e22',
                backgroundColor: state.isFocused ? '#f0f4f5' : '#fff',
                '&:hover': {
                  backgroundColor: '#f0f4f5',
                },
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: '#444C4D',
                '&:hover': {
                  color: '#444c4d',
                },
              }),
              indicatorSeparator: () => ({
                display: 'none',
              }),
            }}
          />
        </div>

        <div className={classes['header__user-pfp']}>
          <img src="./pfp.jpg" alt="user" />
        </div>
      </div>
    </>
  )
}

export default HeaderButton
