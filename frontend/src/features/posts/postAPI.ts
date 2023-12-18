import { PostDeleteData, PostFormData, PostsState } from './PostSlice'

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
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      return response.json()
    })
    .catch((error) => {
      console.log('error :>> ', error)
      return {} as PostsState
    })
}

export const updatePost = async (payload: PostFormData) => {
  const post = payload.post
  return fetch(`${API_URL}/posts/${post.id}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      post,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log('error  :>> ', error)
      return {} as PostsState
    })
}

export const destroyPost = async (payload: PostDeleteData) => {
  const post = payload.post
  return fetch(`${API_URL}/posts/${post.post_id}.json`, {
    method: 'DELETE',
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
