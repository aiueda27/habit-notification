import { LoginData } from './LoginSlice'

const API_URL = 'http://localhost:3001'

export const findUser = async (payload: LoginData) => {
  const user = payload
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...user,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Authentication failed')
      }

      return response.json()
    })
    .catch((error) => {
      console.log('error :>> ', error)
      alert(
        'your username and password are incorrect.\nInput\nusername: ai\npassword: 123'
      )
      return {}
    })
}
