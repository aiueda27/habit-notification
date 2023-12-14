import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { findUserAsync } from './LoginSlice'
import { AppDispatch } from '../../app/store'

function LoginForm() {
  const dispatch = useDispatch<AppDispatch>()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    const loginData = {
      username: username,
      password: password,
    }
    dispatch(findUserAsync(loginData))
    resetState()
  }

  const resetState = () => {
    setUsername('')
    setPassword('')
  }

  return (
    <form id="userForm">
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" form="userForm" onClick={(e) => handleSubmit(e)}>
        Login
      </button>
    </form>
  )
}

export default LoginForm
