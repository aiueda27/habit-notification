import { useEffect, useState } from 'react'
import ButtonGroup from './ButtonGroup'
import { Button, Flex, Input, ListItem, Text, Textarea } from '@chakra-ui/react'
import postsReducer from '../../features/login/LoginSlice'
import { PostFormData, PostState } from './PostSlice'
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'

type PostProps = {
  dispatch: ThunkDispatch<ReturnType<typeof postsReducer>, void, AnyAction>
  post: PostState
  toggleEditForm: (data: number) => void
  postToEdit: number
  submitEdit: (data: PostFormData) => void
}

function Post({
  dispatch,
  post,
  toggleEditForm,
  postToEdit,
  submitEdit,
}: PostProps) {
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)
  const [isEditing, setIsEditing] = useState(postToEdit === post.id)

  useEffect(() => {
    setIsEditing(postToEdit === post.id)
  }, [postToEdit, post.id])

  // TODO: fix type
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
    <ListItem
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap={5}
      bg="brand.light.gray"
      w="90%"
      mx="auto"
      borderRadius="xl"
      shadow="sm"
      px={5}
      py={3}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'flex-start', md: 'center' }}
        justify="flex-start"
        gap={3}
      >
        {isEditing ? (
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <Text fontSize="2xl" as="b" textAlign="start" color="gray.middle">
            {post.title}
          </Text>
        )}
        {isEditing ? (
          <Textarea
            rows={1}
            cols={50}
            minHeight="36px"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        ) : (
          <Text fontSize="sm" textAlign="start" color="gray.middle">
            {post.body}
          </Text>
        )}
      </Flex>
      {isEditing ? (
        <Button
          bg="blue.light"
          color="brand.50"
          _hover={{ bg: 'brand.50', color: 'blue.light' }}
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          Submit
        </Button>
      ) : (
        <ButtonGroup
          post_id={post.id}
          dispatch={dispatch}
          toggleEditForm={toggleEditForm}
        />
      )}
    </ListItem>
  )
}

export default Post
