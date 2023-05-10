import React from 'react'
import LogoutButton from './LogoutButton'
import Schedule from './Schedule'
import '../Styles/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo_container'>Fantasy VCT Americas</div>
      <Schedule />
      <LogoutButton />
    </div>
  )
}

export default Header
