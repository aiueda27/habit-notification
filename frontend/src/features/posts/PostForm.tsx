import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPostAsync } from './PostSlice'
import { AppDispatch } from '../../app/store'

function PostForm() {
  const dispatch = useDispatch<AppDispatch>()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    const formData = {
      post: {
        title: title,
        body: body,
      },
    }
    dispatch(createPostAsync(formData))
    resetState()
  }

  const resetState = () => {
    setTitle('')
    setBody('')
  }

  return (
    <div>
      <h1>PostForm</h1>
      <form id="postForm">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" form="postForm" onClick={(e) => submitHandler(e)}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default PostForm
