import styled from 'styled-components'
import { useState } from 'react'
import { white, grey2 } from '../utils/colors'
import AtButton, { AtButtonKind, AtButtonVariant } from '../components/AtButton/AtButton'
import AtTextFieldDropdown from '../components/AtDropdown/AtTextFieldDropdown'
import AtLine from '../components/AtLine/AtLine'
import AtTextField from '../components/AtTextField/AtTextField'
import AtTypography from '../components/AtTypography/AtTypography'
import { Box, Container } from '@mui/material'
import { ArrowRight2 } from 'iconsax-react'
import DrawerCreateListing from '../components/AtDrawer/drawers/DrawerCreateListing/DrawerCreateListing'
import AtDrawer from '../components/AtDrawer/AtDrawer'

export const StyledForm = styled.div`
  background-color: ${white};
  margin: 30px 10vw;
  border-radius: 5px;
`

const GeneralInfoForm: React.FunctionComponent<CreateListingProps> = (
  props: CreateListingProps,
) => {
  const [openCreateListing, setOpenCreateListing] = useState(false)

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

            <AtTextField
              maxWidth={99}
              placeholder={'Enter Phone Number'}
              required={true}
              countryCode={true}
              label={'Phone Number'}
            />

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

          <Box display={'flex'} justifyContent={'flex-end'}>
            <AtButton
              kind={AtButtonKind.Success}
              variant={AtButtonVariant.Contained}
              name={'Next Step'}
              endIcon={<ArrowRight2
                onClick={() => setOpenCreateListing(true)}
              />
              }
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

export default GeneralInfoForm
