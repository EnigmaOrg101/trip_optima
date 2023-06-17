import classes from './RushHourSelect.module.scss'
import Select from 'react-select'

const RushHourSelect = () => {
  const options = [
    {
      value: '2',
      label: '2 hours',
    },
    {
      value: '4',
      label: '4 hours',
    },
    {
      value: '6',
      label: '6 hours',
    },
    {
      value: '8',
      label: '8 hours',
    },
  ]

  return (
    <div className={classes.select}>
      <label htmlFor="select">Allocate hours</label>
      <Select
        defaultValue={options[1]}
        onChange={(e) => console.log(e)}
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

export default RushHourSelect
