import classes from './RushLongShort.module.scss'
import Select from 'react-select'
import useRushStore from '../../store/rushStore'

const RushLongShort = () => {
  const setRushType = useRushStore((state) => state.setRushType)

  const options = [
    {
      value: 'Short',
      label: 'Short Trip',
    },
    {
      value: 'Long',
      label: 'Long trip',
    },
  ]

  return (
    <div className={classes.select}>
      <label htmlFor="select">Trip duration</label>
      <Select
        defaultValue={options[0]}
        onChange={(e) => setRushType(e.value)}
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
              ? '2px solid #131e22'
              : '2px solid transparent',
            boxShadow: 'none',
            '&:hover': {
              border: state.isFocused ? '2px solid #131e22' : '2px solid #999',
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
  )
}

export default RushLongShort
