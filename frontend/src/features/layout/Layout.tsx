import { Box } from '@chakra-ui/react'

function Layout({ children }: { children: React.ReactNode }) {
  return <Box pt="20px">{children}</Box>
}

export default Layout
