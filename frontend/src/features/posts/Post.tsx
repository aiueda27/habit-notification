import { useEffect, useState } from 'react'
import ButtonGroup from './ButtonGroup'

function Post({ dispatch, post, toggleEditForm, postToEdit, submitEdit }: any) {
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)
  const [isEditing, setIsEditing] = useState(postToEdit === post.id)

  useEffect(() => {
    setIsEditing(postToEdit === post.id)
  }, [postToEdit, post.id])

  const submitHandler = (e: any) => {
    e.preventDefault()

    const formData = {
      post: {
        id: post.id,
        title: title,
        body: body,
      },
    }
    submitEdit(formData)
    resetState()
  }

  const resetState = () => {
    setTitle(post.title)
    setBody(post.body)
  }

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <h2>{post.title}</h2>
      )}
      <ButtonGroup
        post_id={post.id}
        dispatch={dispatch}
        toggleEditForm={toggleEditForm}
      />
      {isEditing ? (
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      ) : (
        <p>{post.body}</p>
      )}
      {isEditing && (
        <button type="submit" onClick={(e) => submitHandler(e)}>
          Submit
        </button>
      )}
    </div>
  )
}

export default Post
