import { Box, Container, Grid } from '@mui/material'
import { ArrowLeft2, Edit } from 'iconsax-react'
import React, { useState } from 'react'
import styled from 'styled-components'
// import CreateProject from './Project/CreateProject'
// import CreateTeam from './Team/CreateTeam'
import { grey, grey2, white } from '../utils/colors'
import AtButton, { AtButtonKind, AtButtonVariant } from '../components/AtButton/AtButton'
import AtTypography from '../components/AtTypography/AtTypography'
import AtLine from '../components/AtLine/AtLine'
import AtFrame from '../components/AtFrame/AtFrame'
import AtTextField from '../components/AtTextField/AtTextField'
import AtTextFieldDropdown from '../components/AtDropdown/AtTextFieldDropdown'
import AtTextFieldDate from '../components/AtTextField/AtTextFieldDate'

export const StyledForm = styled.div`
  background-color: ${white};
  margin: 30px 10vw;
  border-radius: 5px;
`

const Form: React.FunctionComponent<CreateListingProps> = (
  props: CreateListingProps,
) => {
  const [step, setStep] = useState(0)

  const handleCloseAll = () => {
    // props.handleClose()

    setTimeout(() => {
      // props.handleBackToCreateListing()
    }, 1500)
  }

  return (
    <Container>
      <Box padding={'30px 0'}>
        <AtTypography variant={'h3'}>Start by telling us who you are</AtTypography>
      </Box>
      <AtLine />
      <StyledForm>
        <Box padding={'20px'} display={'flex'} justifyContent={'space-between'}>
          <AtTypography variant={'h4'}>General Information</AtTypography>
          <AtTypography variant={'caption'} color={grey2}>
            Fields with * are mandatory
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
            <AtTextField
              label={'Full Name'}
              required={true}
              placeholder={'Enter Full Name'}
              // onValueChange={(e) =>
              //   props.setProject({ ...props.project, listingName: e })
              // }
              maxLength={30}
            />

            <AtTextField
              label={'Email Address'}
              required={true}
              placeholder={'Enter Email Address'}
              // onValueChange={(e) =>
              //   props.setProject({ ...props.project, listingName: e })
              // }
              maxLength={30}
            />

            <Box display={'flex'}>
              <AtTextField
                maxWidth={1}
                placeholder={'Enter Phone Number'}
                required={true}
              />
              <AtTextField
                maxWidth={99}
                placeholder={'Enter Phone Number'}
                required={true}
                label={'Phone Number'}
              />
            </Box>

            <AtTextField
              label={'Company Name'}
              required={true}
              placeholder={'Enter Company Name'}
              // onValueChange={(e) =>
              //   props.setProject({ ...props.project, listingName: e })
              // }
              maxLength={30}
            />

            <AtTextField
              label={'Position'}
              // type={AtTextFieldType.Number}
              required={true}
              placeholder={'Enter Position'}
              maxLength={30}
            />

            <AtTextField
              label={'LinkedIn URL'}
              placeholder={'Enter LinkedIn URL'}
            // onValueChange={(e) =>
            //   props.setProject({ ...props.project, learningLink: e })
            // }
            />

            <AtTextFieldDropdown
              fullWidth={true}
              placeholder={'Select Industry'}
              label={'Industry'} $listItems={[]}
            />

          </Box>
        </Box>
      </StyledForm>
    </Container>
  )
}

interface CreateListingProps {
  clientName?: string
  steps?: number
  // listingType?: ListingType
  handleClose?: () => void
  handleBackToCreateListing?: () => void
}

export default Form
