import React, { useState } from 'react'

function Post({ dispatch, post }: any) {
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)

  return (
    <div>
      <h2>{post.title}</h2>
      {/* button group */}
      <p>{post.body}</p>
      {/* edit submit button */}
    </div>
  )
}

export default Post
