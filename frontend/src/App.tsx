import './App.css'
import Posts from './features/posts/Posts'
import LoginForm from './features/login/LoginForm'
import { useAppSelector } from './app/hooks'
import { selectUser } from './features/login/LoginSlice'
import { useEffect, useState } from 'react'

function App() {
  // TODO: remove accesss token with hard code for testing purpose.
  // localStorage.removeItem('accessToken')
  const token = localStorage.getItem('accessToken')
  const login = useAppSelector(selectUser)

  return (
    <div>
      {token || login.token ? (
        <div className="App">
          <Posts />
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  )
}

export default App
