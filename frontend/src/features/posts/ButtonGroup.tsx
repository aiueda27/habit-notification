import { Flex, ListIcon } from '@chakra-ui/react'
import { destroyPostAsync } from './PostSlice'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import postsReducer from '../../features/login/LoginSlice'

type ButtonGroupProps = {
  post_id: number
  dispatch: ThunkDispatch<ReturnType<typeof postsReducer>, void, AnyAction>
  toggleEditForm: (data: number) => void
}

function ButtonGroup({ post_id, dispatch, toggleEditForm }: ButtonGroupProps) {
  // TODO: fix type
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
    <Flex align="center" gap={2}>
      <button onClick={() => toggleEditForm(post_id)}>
        <ListIcon
          as={EditIcon}
          color="blue.light"
          _hover={{ color: 'brand.50' }}
        />
      </button>
      <button onClick={(e) => handleClick(e)}>
        <ListIcon
          as={DeleteIcon}
          color="blue.light"
          _hover={{ color: 'brand.50' }}
        />
      </button>
    </Flex>
  )
}

export default ButtonGroup
