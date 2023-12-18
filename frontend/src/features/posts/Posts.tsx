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
import PostForm, { FormData } from './PostForm'
import { Box, Flex, Heading, List, Text } from '@chakra-ui/react'

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

  const submitEdit = (formData: FormData) => {
    const { title, body } = formData.post
    if (!title || !body) {
      // TODO: Add Validation
      alert('Please make sure to fill the inputs')
      return
    }
    dispatch(updatePostAsync(formData))
    toggleEditForm(0)
  }

  return (
    <Box>
      <Heading as="h1" size="4xl" layerStyle="gradientBg" bgClip="text">
        Habit List
      </Heading>
      <Text color="brand.100" mb={10}>
        App to manage your habit and notify on slack
      </Text>
      {status !== Statuses.UpToDate ? (
        <Box>{status}</Box>
      ) : (
        <Flex
          direction="column"
          gap={12}
          bg="brand.light"
          w="90%"
          borderRadius="lg"
          mx="auto"
          px="8px"
          py="40px"
        >
          <PostForm />
          <List spacing={5}>
            {posts &&
              posts.length > 0 &&
              posts.map((post) => {
                return (
                  <Post
                    key={post.id}
                    dispatch={dispatch}
                    post={post}
                    toggleEditForm={toggleEditForm}
                    postToEdit={postToEdit}
                    submitEdit={submitEdit}
                  />
                )
              })}
          </List>
        </Flex>
      )}
    </Box>
  )
}

export default Posts
