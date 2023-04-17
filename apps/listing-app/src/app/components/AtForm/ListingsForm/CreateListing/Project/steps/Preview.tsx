import { Box } from '@mui/material'
import React, { Dispatch } from 'react'
import { Listing } from '../../../../../../utils/redux/types/listings.type'

const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
      <>
      {console.log(props.project)}
      </>
    </Box>
  )
}

interface PreviewProps {
  setProject: Dispatch<React.SetStateAction<Listing>>
  project: Listing
  isSmallScreen?: boolean
}

export default Preview
