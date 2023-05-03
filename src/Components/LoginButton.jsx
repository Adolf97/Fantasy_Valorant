import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import '../Styles/LoginButton.css'

const LoginButton = ({ name }) => {
  const { loginWithRedirect } = useAuth0()

  return (
    <div>
      <button
        className={name === 'GOOGLE' ? 'login_btn_google' : 'login_btn_facebook'}
        onClick={() => loginWithRedirect()}
      >
        LOGIN WITH {name}
      </button>
    </div>
  )
}

export default LoginButton
