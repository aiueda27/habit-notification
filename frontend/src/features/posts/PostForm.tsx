import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPostAsync } from './PostSlice'
import { AppDispatch } from '../../app/store'
import { Button, Flex, Input, Textarea } from '@chakra-ui/react'

export type FormData = {
  post: {
    title?: string
    body?: string
  }
}

function PostForm() {
  const dispatch = useDispatch<AppDispatch>()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const submitHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()

    if (!title || !body) {
      // TODO: Add Validation
      alert('Please make sure to fill the inputs')
      return
    }

    const formData: FormData = {
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
    <form id="postForm">
      <Flex align="center" justify="space-between" gap={10} w="90%" mx="auto">
        <Flex flex={1} align="center" justify="flex-start" gap={3}>
          <Input
            type="text"
            name="title"
            value={title}
            placeholder="Write new title"
            _placeholder={{ color: 'brand.light.gray', fontSize: 'sm' }}
            bg="white"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            bg="white"
            placeholder="Write description"
            _placeholder={{ color: 'brand.light.gray', fontSize: 'sm' }}
            rows={1}
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Flex>
        <Button
          bg="blue.light"
          color="brand.50"
          _hover={{ bg: 'white', color: 'blue.light' }}
          type="submit"
          form="postForm"
          onClick={(e) => submitHandler(e)}
        >
          +
        </Button>
      </Flex>
    </form>
  )
}

export default PostForm
