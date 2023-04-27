import { Box } from '@mui/material'
import React, { Dispatch } from 'react'
import { Listing } from '../../../../../../../utils/redux/types/listings.type'
import AtTypography from '../../../../../../AtTypography/AtTypography'
import { StyledForm } from '../../../CreateListingStart'
import AtLine from '../../../../../../AtLine/AtLine'
import GeneralInformation from './GeneralInformation'
import JobDescription from './JobDescription'
import ScreeningQuestions from './ScreeningQuestions'
import Skills from './Skills'

const Preview: React.FC<PreviewProps> = (props: PreviewProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
      <StyledForm>
        <Box
          padding={'20px'}
          display={'flex'}
          justifyContent={'center'}
          flexDirection={props.isSmallScreen ? 'column' : 'row'}
        >
          <AtTypography
            variant={'h4'}
            fontSize={props.isSmallScreen ? '1.125rem' : '1.625rem'}
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

          <Box display={'flex'} flexDirection={'column'} gap={'25px'}>
            <GeneralInformation
              listingGeneralInfo={props.project}
            />

            <JobDescription
              listingGeneralInfo={props.project}
            />

            <Skills
              listingGeneralInfo={props.project}
            />

            <ScreeningQuestions
              listingGeneralInfo={props.project}
            />
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
