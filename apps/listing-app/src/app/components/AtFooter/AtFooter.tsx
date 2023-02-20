import React from 'react'
import { Box } from '@mui/material'
import AtTypography from '../AtTypography/AtTypography'
import styled from 'styled-components'
import { grey } from '../../utils/colors'

const StyledFooter = styled(Box)`
  width: fill-available;
  position: absolute;
  bottom: 0;
  padding: 35px 20px;
  display: flex;
  justify-content: space-between;

  p {
    color: ${grey}
  }
`

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <AtTypography >Alteam is an initiave and brand of YJCollective Limited</AtTypography>
      <Box display={'flex'} gap={'30px'}>
      <AtTypography >Terms and Conditions</AtTypography>
      <AtTypography >Privacy Policy</AtTypography>
      </Box>
    </StyledFooter>
  )
}

export default Footer

