import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import { Document, DocumentText } from 'iconsax-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import { white, grey5, green } from '../../../../utils/colors'
import { boxShadow } from '../../../../utils/theme'
import AtLine from '../../../AtLine/AtLine'
import AtTypography from '../../../AtTypography/AtTypography'
import FolderIcon from '../../../../assets/images/icons/folder.svg'
import GroupIcon from '../../../../assets/images/icons/group.svg'
import AtCreateListingCard from '../../../AtCard/AtCreateListingCard'
import CreateListing from '.'
import { ListingType } from '@yjcapp/app'
import CustomLink from '../../../AtLink/AtLink'
import { useAppDispatch } from '../../../../utils/hooks/reduxHook'
import { handleSelectClient } from '../../../../utils/redux/actions/clients.action'

export const StyledForm = styled.div`
  background-color: ${white};
  border-radius: 5px;
`

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${white};
  border: 1px solid ${grey5};
  border-radius: 5px;
  transition: 0.3s;
  width: inherit;

  &:hover {
    box-shadow: ${boxShadow};
    transition: 0.3s;
    cursor: pointer;
    border-color: ${green};
  }
`

const CreateListingStart: React.FC<CreateListingProps> = (
  props: CreateListingProps,
) => {
  const isSmallScreen = useMediaQuery('(max-width:1079px)')
  const dispatch = useAppDispatch()
  const [openCreateListing, setOpenCreateListing] = useState(false)
  const [listingType, setListingType] = useState<ListingType>(
    ListingType.Project,
  )

  console.log(props)
  const currencClient = props.clientId && dispatch(handleSelectClient(props?.clientId))
  console.log(currencClient)

  const createListing = (type: ListingType) => {
    setOpenCreateListing(true)
    setListingType(type)
  }

  const handleCloseToCreateListing = () => {
    setOpenCreateListing(false)
  }

  return openCreateListing ? (
    <CreateListing
      listingType={listingType}
      steps={listingType === ListingType.Project ? 5 : 6}
      clientName={''}
      isSmallScreen={isSmallScreen}
      handleBackToCreateListing={handleCloseToCreateListing}
    />
  ) : (
    <Container>
      <Box
        paddingY={'30px'}
        display={'flex'}
        flexDirection={'column'}
        gap={'30px'}
      >
        {/* <Box display={'flex'} gap={'5px'}>
          <StyledLink to="/form">
            <AtButton
              variant={AtButtonVariant.Contained}
              startIcon={<ArrowLeft2 />}
              kind={AtButtonKind.Default}
              onClick={handleCloseToCreateListing}
            />
          </StyledLink>
          <AtTypography color={grey2}>Back to General Information</AtTypography>
        </Box> */}

        <AtTypography
          variant={'h3'}
          fontSize={isSmallScreen ? '1.5rem' : '2rem'}
        >
          First step: select your listing type
        </AtTypography>

        <AtLine />

        <Grid container justifyContent={'center'}>
          <Grid
            xs={10}
            display={'flex'}
            flexDirection={'column'}
            gap={'20px'}
            maxWidth={isSmallScreen ? 'unset' : 'initial'}
            flexBasis={isSmallScreen ? 'unset' : 'initial'}
          >
            <StyledForm>
              <Box
                padding={'20px'}
                display={'flex'}
                justifyContent={'space-between'}
              >
                <AtTypography
                  variant={'h4'}
                  fontSize={isSmallScreen ? '1rem' : '1.5rem'}
                >
                  Do you need a freelancer for a fixed project or a team for
                  3-24 months?
                </AtTypography>
              </Box>
              <AtLine />
              <Grid
                container
                justifyContent={'center'}
                gap={'20px'}
                padding={'20px'}
                flexWrap={'unset'}
              >
                <AtCreateListingCard
                  listingOption={ListingType.Project}
                  icon={FolderIcon}
                  onClick={() => createListing(ListingType.Project)}
                />
                <AtCreateListingCard
                  listingOption={ListingType.Team}
                  icon={GroupIcon}
                  onClick={() => createListing(ListingType.Team)}
                />
              </Grid>
            </StyledForm>
          </Grid>
          <Grid
            xs={10}
            marginTop={'50px'}
            display={'flex'}
            gap={'20px'}
            flexWrap={'wrap'}
            justifyContent={isSmallScreen ? 'center' : 'flex-start'}
          >
            <CustomLink>
              <AtTypography
                variant="subtitle1"
                fontSize={isSmallScreen ? '14px' : '1rem'}
              >
                <Document size={20} />
                What's an Alteam Project?
              </AtTypography>
            </CustomLink>
            <CustomLink>
              <AtTypography
                variant="subtitle1"
                fontSize={isSmallScreen ? '14px' : '1rem'}
              >
                <DocumentText size={20} /> What's an Alteam Team?
              </AtTypography>
            </CustomLink>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

interface CreateListingProps {
  clientId?: number
}

export default CreateListingStart
