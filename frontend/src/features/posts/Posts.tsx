import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  Statuses,
  fetchPostsAsync,
  selectPosts,
  selectStatus,
} from './PostSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import Post from './Post'
import PostForm from './PostForm'

function Posts() {
  const posts = useAppSelector(selectPosts)
  const status = useAppSelector(selectStatus)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchPostsAsync())
  }, [dispatch])

  return (
    <div>
      <h1>Posts</h1>
      {status !== Statuses.UpToDate ? (
        <div>{status}</div>
      ) : (
        <div>
          <h3>{status}</h3>
          <PostForm />
          {posts &&
            posts.length > 0 &&
            posts.map((post) => {
              return (
                <div key={post.id}>
                  <Post dispatch={dispatch} post={post} />
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default Posts
