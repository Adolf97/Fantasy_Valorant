import '../Styles/LoginPage.css'
import LoginButton from './LoginButton'

const LoginPage = () => {
  return (
    <div className='login_body'>
      <div className='container_login'>
        <h1 className='login_title'>Fantasy VCT Americas</h1>
        <h3 className='login_subtitle'>BETA</h3>
        <LoginButton name='GOOGLE' />
        <LoginButton name='FACEBOOK' />
      </div>
    </div>
  )
}

export default LoginPage