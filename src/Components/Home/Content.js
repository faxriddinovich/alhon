import React from 'react'
import './style.scss'
import alhon from '../../Images/alhonlogo.png'

function Content() {
  return (
    <div className='main-content'>
      <div className='alhon-logo'>
        <img src={alhon} alt="" />  
      </div>      
    </div>
  )
}

export default Content