import styled from 'styled-components'
import { Box, Card, Container, useMediaQuery } from '@mui/material'
import { ArrowLeft2 } from 'iconsax-react'
import AtButton, {
  AtButtonKind,
  AtButtonVariant,
} from '../components/AtButton/AtButton'
import AtTypography from '../components/AtTypography/AtTypography'
import { white, grey2, grey } from '../utils/colors'
import { useNavigate } from 'react-router-dom'
import Header from '../components/AtHeader/AtHeader'
import { useEffect, useState } from 'react'
import { clientService, listingService } from '../utils/services'
import { useAuth0 } from '@auth0/auth0-react'
import { ClientListing } from '@yjcapp/app'
// import { GeneralInfoSchemaType, generalInfoSchema } from '../validations/generalInfoSchema'
// import { Controller, SubmitHandler, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';

export const StyledForm = styled.div`
  background-color: ${white};
  margin: 30px 10vw;
  border-radius: 5px;

  @media (max-width: 1079px) {
    margin: 20px 0;
  }
`

const StyledCard = styled(Card)`
  width: 100%;
  height: auto;
  box-shadow: none;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 5px;

  p {
    color: ${grey}
    line-height: 22.4px;
  }
`

const Listings: React.FC = () => {
  const navigate = useNavigate()
  const isSmallScreen = useMediaQuery('(max-width:1079px)')
  const { user } = useAuth0();
  const [userListings, setUserListings] = useState<ClientListing[]>()

  useEffect(() => {
    const getUserListings = async () => {
      const clients = await clientService.searchClient({ clientName: '' })
      const userClients = clients.filter(client => client.email === user?.email)

      const listings = await listingService.searchListing({})
      const filteredListings = listings.filter(listing => userClients.some(userClient => listing.soloClient.id === userClient.id))

      setUserListings(filteredListings)
    }

    getUserListings()
  }, [user])

  // const getClientName = (id?: number) => {
  //   const clientName = clientService.searchClient({ id: id })
  //     .then(client => {
  //       return client
  //     })

  //     console.log(clientName)
  // }

  return (
    <>
      <Header />
      <Container>
        <Box padding={'30px 0'}>
          <Box display={'flex'} gap={'7px'} marginBottom={4}>
            <AtButton
              variant={AtButtonVariant.Contained}
              startIcon={<ArrowLeft2 />}
              kind={AtButtonKind.Default}
              onClick={() => navigate(-1)}
            />

            <AtTypography color={grey2}>Back</AtTypography>
          </Box>
          <AtTypography
            variant={'h3'}
            fontSize={isSmallScreen ? '1.5rem' : '2rem'}
            justifyContent={isSmallScreen ? 'center' : 'flex-start'}
          >
            My listings
          </AtTypography>
        </Box>

        <Box
          display={'flex'}
          gap={'20px'}
          flexWrap={isSmallScreen ? 'wrap' : 'nowrap'}
          padding={isSmallScreen ? '0 30px' : '0'}
        >

          {userListings?.map((listing: ClientListing) => {
            return (
              <StyledCard>
                {listing.listingName}
              </StyledCard>
            )
          })}
        </Box>

      </Container>
    </>
  )
}

export default Listings
