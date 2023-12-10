import React, { useState } from 'react'
import ButtonGroup from './ButtonGroup'

function Post({ dispatch, post }: any) {
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)

  return (
    <div>
      <h2>{post.title}</h2>
      <ButtonGroup post_id={post.id} dispatch={dispatch} />
      <p>{post.body}</p>
      {/* edit submit button */}
    </div>
  )
}

export default Post
