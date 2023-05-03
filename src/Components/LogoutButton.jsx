import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../Styles/LogoutButton.css'

const LogoutButton = ({ name }) => {
  const { logout } = useAuth0()

  return (
    <div>
      <button
        className='logout_btn'
        onClick={() => logout()}
      >
        LOG OUT
      </button>
    </div>
  )
}

export default LogoutButton