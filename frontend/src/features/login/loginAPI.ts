import { LoginData } from './LoginSlice'

const API_URL = 'http://localhost:3001'

export const findUser = async (payload: LoginData) => {
  const user = payload
  console.log('user :>> ', user)
  return fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...user,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log('error :>> ', error)
      return {}
    })
}
