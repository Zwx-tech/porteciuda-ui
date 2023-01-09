import { useState } from 'react'
import './UserInput.css'
const UserInput = () => {  

  return (
    <div className='user-input'>
      <div className="text-area__wrapper">
        <textarea ></textarea>
      </div>
      <div className='user-input__buttons'>
        <button className='user-input__button'></button>
        <button className='user-input__button --light'></button>
      </div>
    </div>
  )
}

export default UserInput;
