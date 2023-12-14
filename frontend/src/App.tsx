import './App.css'
import Posts from './features/posts/Posts'
import LoginForm from './features/login/LoginForm'
import { useAppSelector } from './app/hooks'
import { selectUser } from './features/login/LoginSlice'

function App() {
  const login = useAppSelector(selectUser)

  return (
    <div>
      {login.token ? (
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
