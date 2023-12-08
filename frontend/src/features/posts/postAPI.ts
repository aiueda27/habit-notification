import { PostState } from './PostSlice'

const API_URL = 'http://localhost:3001'

// TODO: change to axios
export async function fetchPosts() {
  return fetch(`${API_URL}/posts.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log('error :>> ', error)
      return {} as PostState
    })
}
