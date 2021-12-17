import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import * as authService from './services/authService'


//Components 
import Character from './components/Character'

const App = () => {
  const [characterData, setCharacterData] = useState('');
  const [characterTitle, setCharacterTitle] = useState('')
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()


  useEffect(() => {
    let heroUrl = `http://gateway.marvel.com/v1/public/characters?name=${characterTitle}&ts=1&apikey=f5fd89757a7f10387ce423f3f28c64df&hash=aaef7f942c150ae767af53eb559c9708`;

    const makeApiCall = () => {
      fetch(heroUrl)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setCharacterData((data))
        })
    }
    makeApiCall()
  }, [characterTitle])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }


  return (
  <>
    <NavBar user={user} handleLogout={handleLogout} />
    <Routes>
      <Route path="/" element={<Landing user={user} />} />
      <Route
        path="/signup"
        element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
      />
      <Route
        path="/login"
        element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
      />
      <Route
        path="/profiles"
        element={user ? <Profiles /> : <Navigate to="/login" />}
      />
      <Route
        path="/characterSearch"
        element={ characterData.data ? <Character character={characterData} /> : null }
      />
    </Routes>
  </>
)
}

export default App
