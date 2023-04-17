import { Box } from '@mui/material'
import React, { Dispatch } from 'react'
import { Listing } from '../../../../../../utils/redux/types/listings.type'
import AtTypography from '../../../../../../components/AtTypography/AtTypography'
import { StyledForm } from '../../CreateListingStart'
import AtLine from '../../../../../../components/AtLine/AtLine'

const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
      <StyledForm>
        <Box
          padding={'20px'}
          display={'flex'}
          justifyContent={'space-between'}
          flexDirection={props.isSmallScreen ? 'column' : 'row'}
        >
          <AtTypography
            variant={'h4'}
            fontSize={props.isSmallScreen ? '1.625rem' : '2.125rem'}
          >
            Listing Preview
          </AtTypography>
        </Box>

        <AtLine />

        <Box
          padding={'20px'}
          display={'flex'}
          flexDirection={'column'}
          gap={'50px'}
        >
          <Box display={'flex'} gap={'30px'} flexDirection={'column'}>

            <AtTypography variant='h5'>Project Name: {'Project Name'}</AtTypography>

            <AtTypography variant='h5'>Number of Individuals: {'Number of Individuals'}</AtTypography>

            <Box display={'flex'} gap={'10px'} flexDirection={'column'}>
              <Box display={'flex'} gap={'16px'}>
                <AtTypography variant='h5'>Work Type: {'Work Type'}</AtTypography>
                <AtTypography variant='h5'>Timezone: {'Timezone'}</AtTypography>
              </Box>

              <AtTypography variant='h5'>Availability: {'Availability'}</AtTypography>
              <AtTypography variant='h5'>Project Length: {'Project Length'}</AtTypography>
              <AtTypography variant='h5'>Start Date: {'Start Date'}</AtTypography>
              <AtTypography variant='h5'>Currency: {'Currency'}</AtTypography>

              <Box display={'flex'} gap={'10px'} flexDirection={'column'}>
                <AtTypography variant='h5'>Select Rate: {'Select Rate'}</AtTypography>
                <Box display={'flex'} gap={'16px'}>
                  <AtTypography variant='h5'>Rate From: {'Rate From'}</AtTypography>
                  <AtTypography variant='h5'>Rate To: {'Rate To'}</AtTypography>
                </Box>
              </Box>

              <AtTypography variant='h5'>Difficulty: {'Difficulty'}</AtTypography>
              <AtTypography variant='h5'>Learning Link: {'Learning Link'}</AtTypography>
            </Box>
          </Box>
        </Box>
      </StyledForm>
    </Box>
  )
}

interface PreviewProps {
  setProject: Dispatch<React.SetStateAction<Listing>>
  project: Listing
  isSmallScreen?: boolean
}

export default Preview
