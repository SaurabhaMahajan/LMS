import React from 'react'
import spinnerPrimary from './Spinner_Primary.svg'
import spinnerSecondary from './Spinner_Secondary.svg'


const Spinner = (props) => {
  return (
    <div style={props.customStyle}>
      <img
        src={props.primary ? spinnerPrimary : spinnerSecondary}
        style={{ width: '200px', margin: 'auto', display: 'block'}}
        alt='loading...'
      />
    </div>
  )
}

export default Spinner