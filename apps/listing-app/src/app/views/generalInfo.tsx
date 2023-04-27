import { useState } from 'react'
import styled from 'styled-components'
import { Box, Container, useMediaQuery } from '@mui/material'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import { ClientStatus } from '@yjcapp/app'
import { Client } from '../utils/redux/types/clients.type'
import { useAppDispatch } from '../utils/hooks/reduxHook'
import { handleCreateClient } from '../utils/redux/actions/clients.action'
import AtButton, {
  AtButtonKind,
  AtButtonVariant,
} from '../components/AtButton/AtButton'
import AtTextFieldDropdown from '../components/AtDropdown/AtTextFieldDropdown'
import AtLine from '../components/AtLine/AtLine'
import AtTextField from '../components/AtTextField/AtTextField'
import AtTypography from '../components/AtTypography/AtTypography'
import { white, grey2 } from '../utils/colors'
import { useNavigate } from 'react-router-dom'
import Header from '../components/AtHeader/AtHeader'
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
const ClientInfo: React.FC = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isSmallScreen = useMediaQuery('(max-width:1079px)')
  const defaultClient = {
    companyName: '',
    phoneNumber: '',
    companyUrl: '',
    linkedinUrl: '',
    industry: '',
    projectType: undefined,
    deliveryType: undefined,
    teamRequest: undefined,
    request: '',
    email: '',
    fullName: '',
    position: '',
    status: ClientStatus.Request,
  }
  const [client, setClient] = useState<Client>(defaultClient)

  // const {
  //   control,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isSubmitSuccessful },
  // } = useForm<GeneralInfoSchemaType>({
  //   resolver: zodResolver(generalInfoSchema),
  // });

  const createClient = () => {
    dispatch(handleCreateClient(client))
    navigate('/create-my-listing')
  }

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
              onClick={() => navigate("/")}
            />

            <AtTypography color={grey2}>Back to Home page</AtTypography>
          </Box>
          <AtTypography
            variant={'h3'}
            fontSize={isSmallScreen ? '1.5rem' : '2rem'}
            justifyContent={isSmallScreen ? 'center' : 'flex-start'}
          >
            Start by telling us who you are
          </AtTypography>
        </Box>
        <AtLine />
        <StyledForm>
          <Box
            padding={'20px'}
            display={'flex'}
            justifyContent={'space-between'}
            flexDirection={isSmallScreen ? 'column' : 'row'}
          >
            <AtTypography variant={'h4'} fontSize="1.5rem">
              General Information
            </AtTypography>
            <AtTypography variant={'caption'} color={grey2}>
              Fields with * are mandatory
            </AtTypography>
          </Box>
          <AtLine />

          <Box
            padding={isSmallScreen ? '20px 20px 100px' : '20px'}
            display={'flex'}
            flexDirection={'column'}
            gap={'50px'}
          >
            <Box display={'flex'} gap={'30px'} flexDirection={'column'}>
              <AtTextField
                label={'Full Name'}
                required
                placeholder={'Enter Full Name'}
                onValueChange={(e) => setClient({ ...client, fullName: e })}
                maxLength={30}
              />

              {/* <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <AtTextField
                  placeholder={'Enter email'}
                  label={'email'}
                  {...field}
                  isError={errors.email ?? false}
                  helperText={errors.email?.message?.toString()}
                />
              )}
            /> */}

              <AtTextField
                label={'Email Address'}
                required
                placeholder={'Enter Email Address'}
                onValueChange={(e) => setClient({ ...client, email: e })}
                maxLength={30}
              />

              <AtTextField
                maxWidth={99}
                placeholder={'Enter Phone Number'}
                required
                countryCode
                onValueChange={(e) => setClient({ ...client, phoneNumber: e })}
                label={'Phone Number'}
              />

              <AtTextField
                label={'Company Name'}
                required
                placeholder={'Enter Company Name'}
                onValueChange={(e) => setClient({ ...client, companyName: e })}
                maxLength={30}
              />

              <AtTextField
                label={'Position'}
                required
                placeholder={'Enter Position'}
                onValueChange={(e) => setClient({ ...client, position: e })}
                maxLength={30}
              />

              <AtTextField
                label={'LinkedIn URL'}
                placeholder={'Enter LinkedIn URL'}
                onValueChange={(e) => setClient({ ...client, linkedinUrl: e })}
              />

              <AtTextFieldDropdown
                fullWidth
                placeholder={'Select Industry'}
                searchable={false}
                label={'Industry'}
                $listItems={[
                  {
                    id: 0,
                    label: 'Software Engineering',
                  },
                  {
                    id: 1,
                    label: 'Data',
                  },
                  {
                    id: 2,
                    label: 'Marketing',
                  },
                  {
                    id: 3,
                    label: 'Web 3.0',
                  },
                  {
                    id: 4,
                    label: 'Finance, Legal & Compliance',
                  },
                ]}
                handleSelect={(e) =>
                  setClient({ ...client, industry: e.label })
                }
              />
            </Box>

            <Box
              display={'flex'}
              justifyContent={isSmallScreen ? 'center' : 'flex-end'}
            >
              <AtButton
                kind={AtButtonKind.Success}
                variant={AtButtonVariant.Contained}
                name={'Next Step'}
                endIcon={<ArrowRight2 />}
                onClick={createClient}
                disabled={!client.companyName}
              />
            </Box>
          </Box>
        </StyledForm>
      </Container>
    </>
  )
}

export default ClientInfo
