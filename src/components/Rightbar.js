import { Box } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import React from 'react'

export const Rightbar = () => {
  return (
    <Box bgcolor={'lightBlue'} flex={2} p={2} sx={{display: {xs: 'none', sm:'block'}}}>RightBar</Box>
  )
}
