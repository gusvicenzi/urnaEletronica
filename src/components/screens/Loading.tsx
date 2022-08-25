// import React, { useState, useEffect } from 'react'
import { LinearProgress, LinearProgressProps } from '@mui/material'
import Box from '@mui/material/Box'
import '../../styles/loadingPage.css'

export const LoadingScreen = (
  props: LinearProgressProps & { value: number }
) => {
  return (
    <div className='Loading'>
      {/* <Box
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}> */}
      <Box
        sx={{
          width: '80%'
        }}>
        <LinearProgress
          variant='determinate'
          sx={{
            bgcolor: 'lightgray',
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: '1px',
            height: 25
          }}
          color='success'
          {...props}
        />
      </Box>
      <h1>GRAVANDO</h1>
      {/* </Box> */}
    </div>
  )
}
