import React from 'react'
import '../Styles/Schedule.css'
import logoFuria from '../Images/furia_logo.png'
import logo100Thieves from '../Images/100Thieves_logo.png'

const Schedule = () => {
  return (
    <div className='schedule_container'>
      <div className='day'>SÁBADO - 13 DE MAYO</div>
      <div className='firstMatch'>
        <div className='match'>
          <img className='logo_equipos' src={logoFuria} alt="" />
          <img className='logo_equipos' src={logo100Thieves} alt="" />
        </div>
        <div className='hour'>13:00</div>
      </div>
    </div>
  )
}

export default Schedule
