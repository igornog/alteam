import React from 'react'
import { Box } from '@mui/material'
import AtTypography from './components/AtTypography/AtTypography'
import AtButton, { AtButtonKind, AtButtonVariant } from './components/AtButton/AtButton'
import styled from 'styled-components'

const StyledBackground = styled.div`
  height: 100%;
  background-origin: content-box;
  display: flex;
  padding-bottom: 70px;
  align-items: center;
  justify-content: center;
`

const Home: React.FunctionComponent = () => {
  return (
    <StyledBackground>
      <Box
        display={'flex'}
        flexDirection={'column'}
      >
        <AtTypography variant={'h2'} >Welcome on board</AtTypography>
        <Box width={'28vw'} margin={'15px 0 30px'}>
          <AtTypography variant={'body1'} >In order to better help you find clients that best match with your experience, let us know what you are looking for. </AtTypography>
        </Box>
        <AtButton
          kind={AtButtonKind.Default}
          variant={AtButtonVariant.Contained}
          name={'Let’s get started'}
        />
      </Box>
    </StyledBackground>
  )
}

export default Home

