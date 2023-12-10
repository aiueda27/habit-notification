import { destroyPostAsync } from './PostSlice'

// TODO: fix type
function ButtonGroup({ post_id, dispatch, toggleEditForm }: any) {
  const handleClick = (e: any) => {
    e.preventDefault()
    const payload = {
      post: {
        post_id: post_id,
      },
    }
    dispatch(destroyPostAsync(payload))
  }
  return (
    <div>
      <button onClick={() => toggleEditForm(post_id)}>Edit</button>
      <button onClick={(e) => handleClick(e)}>Delete</button>
    </div>
  )
}

export default ButtonGroup
