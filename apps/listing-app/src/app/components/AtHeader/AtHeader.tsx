import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import logo from '../../assets/images/black_logo.svg'
import AtButton, { AtButtonKind, AtButtonVariant } from '../AtButton/AtButton'
import { AddCircle, Profile2User } from 'iconsax-react'
import AtLine from '../AtLine/AtLine'
import { useAuth0 } from "@auth0/auth0-react";


const Header: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width:1079px)')
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={isSmallScreen ? 'center' : 'space-between'}
        width={'fill-available'}
        padding={'20px'}
      >
        <img src={logo} alt={'logo'} width={100} />
        {!isSmallScreen ? (
          <Box display={'flex'} gap={'30px'}>
            <AtButton
              kind={AtButtonKind.Default}
              variant={AtButtonVariant.Outlined}
              startIcon={<Profile2User />}
              onClick={() => 
                (window.location.href = 'https://alteam.webflow.io/')
              }
              name={'I am a freelancer'}
            />
              <AtButton
                kind={AtButtonKind.Success}
                variant={AtButtonVariant.Contained}
                startIcon={<AddCircle />}
                name={'Create Free Listing'}
                onClick={() => loginWithRedirect()}
              />
          </Box>
        ) : null}
      </Box>
      <AtLine />
    </>
  )
}

export default Header
