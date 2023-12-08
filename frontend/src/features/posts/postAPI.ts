import { PostFormData, PostState, PostsState } from './PostSlice'

const API_URL = 'http://localhost:3001'

// TODO: change to axios
export const fetchPosts = async () => {
  return fetch(`${API_URL}/posts.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log('error :>> ', error)
      return {} as PostsState
    })
}

export const createPost = async (payload: PostFormData) => {
  const post = payload.post
  return fetch(`${API_URL}/posts.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      post,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log('error :>> ', error)
      return {} as PostsState
    })
}
