import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenticate from './components/Authenticate'
import CurrentUser from './components/CurrentUser'
import LogoutButton from './components/LogoutButton'

function App() {
    const [token, setToken] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    return (
        <>
        {currentUser && <LogoutButton setCurrentUser={setCurrentUser} setToken={setToken}/>}
        <CurrentUser currentUser={currentUser}/>
        {
            token
            ? <Authenticate token={token} setCurrentUser={setCurrentUser}/>
            : <SignUpForm setToken={setToken}/>
        }
        </>
    )
}

export default App
