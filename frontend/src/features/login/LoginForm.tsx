import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { findUserAsync } from './LoginSlice'
import { AppDispatch } from '../../app/store'
import { Button, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'

function LoginForm() {
  const dispatch = useDispatch<AppDispatch>()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()

    const loginData = {
      username: username,
      password: password,
    }
    dispatch(findUserAsync(loginData))
    resetState()
  }

  const resetState = () => {
    setUsername('')
    setPassword('')
  }

  return (
    <form id="userForm">
      <Flex direction="column" gap={5} w={{ base: '90%', md: '40%' }} mx="auto">
        <FormControl>
          <FormLabel>User name</FormLabel>
          <Input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>

        {/* TODO: Add show password function */}
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>

        <Button
          layerStyle="gradientBg"
          color="white"
          _hover={{ opacity: 0.5 }}
          type="submit"
          form="userForm"
          onClick={(e) => handleSubmit(e)}
        >
          Login
        </Button>
      </Flex>
    </form>
  )
}

export default LoginForm
