import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="App">
      {isAuthenticated ? <HomePage /> : <LoginPage />}
    </div>
  );
}

export default App;
