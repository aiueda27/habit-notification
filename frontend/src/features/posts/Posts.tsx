import { useEffect, useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import {
  Statuses,
  fetchPostsAsync,
  selectPosts,
  selectStatus,
  updatePostAsync,
} from './PostSlice'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../app/store'
import Post from './Post'
import PostForm from './PostForm'

function Posts() {
  const posts = useAppSelector(selectPosts)
  const status = useAppSelector(selectStatus)
  const dispatch = useDispatch<AppDispatch>()

  const [postToEdit, setPostToEdit] = useState(0)

  useEffect(() => {
    dispatch(fetchPostsAsync())
  }, [dispatch])

  const toggleEditForm = (post_id: number) => {
    if (postToEdit === post_id) {
      // if edit button is clicked when edit is active
      setPostToEdit(0)
    } else {
      setPostToEdit(post_id as number)
    }
  }

  const submitEdit = (formData: any) => {
    dispatch(updatePostAsync(formData))
    toggleEditForm(0)
  }

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
                  <Post
                    dispatch={dispatch}
                    post={post}
                    toggleEditForm={toggleEditForm}
                    postToEdit={postToEdit}
                    submitEdit={submitEdit}
                  />
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default Posts
