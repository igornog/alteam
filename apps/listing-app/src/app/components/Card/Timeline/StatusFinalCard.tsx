
import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { green, grey3, grey5, white, white1 } from '../../../utils/colors'
import AtTypography from '../../Typography/Typography'
import { boxShadow } from '../../../utils/theme'
import { ClientListing } from '@yjcapp/app'
import Typography from '../../Typography/Typography'
import Button, { AtButtonKind, AtButtonVariant } from '../../Button/Button'
import blueBackgroundGradient from '../../../assets/images/blue-background-gradient.png'

export const StyledCard = styled.div<{ fullHeight?: boolean, isSmallScreen?: boolean }>`
  background-image: url(${blueBackgroundGradient});
  background-size: cover;
  background-position: center;
  height: 140px;
  color: ${white};
  border: 1px solid ${grey5};
  border-radius: 5px;
  padding: 20px;
  transition: 0.3s;

  button {
    background-color: ${white1};
    line-height: 19px;
    height: auto;
  }

  p {
    font-size: 12px;
  }

  &:hover {
    box-shadow: ${boxShadow};
    transition: 0.3s;
    border-color: ${green};
  }
`

const StyledSpan = styled.span`
  width: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
  font-size: 12px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    opacity: 1;
  }
`

const DateText = styled(Typography)`
  position: absolute;
  bottom: 20px;
`

const TimelineStatusFinalCard: React.FunctionComponent<AtListingCardProps> = (
  props: AtListingCardProps,
) => {
  const isSmallScreen = useMediaQuery('(max-width:1079px)')

  return (
    <StyledCard
      className='carousel-cell'
      onClick={props.onClick} fullHeight={props.fullHeight} isSmallScreen={isSmallScreen}>
      <Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          height={'100%'}
        >
          <Box display={'flex'} gap={'5px'} flexDirection={'column'} width={'100%'}>
            <Box
              display={'flex'}
              height={'100%'}
              flexDirection={'column'}
              justifyContent={'space-between'}
            >
              <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                <StyledSpan><AtTypography>1 </AtTypography></StyledSpan>
                <AtTypography fontWeight={600}>
                  {'Alteam Wants to Book a call with You'}
                </AtTypography>
                <AtTypography>
                  {'Lorem ipsum dolor sit amet consectetur. Viverra egestas mus mauris sed tortor.'}
                </AtTypography>
              </Box>

              <Box margin={'5px 0'}>
                <Button
                  variant={AtButtonVariant.Contained}
                  kind={AtButtonKind.Success}
                  name='Book a Call'
                  fontSize='16px'
                  fontWeight={600}
                  padding='5px 10px'
                />
              </Box>

            </Box>
            <DateText>
              {'Feb 2, 2023'}
            </DateText>
          </Box>
        </Box>

        <Typography color={grey3} fontSize={'12px'} ellipsis={3}>
          {props.listing?.jobDescription}
        </Typography>

      </Box>
    </StyledCard>

  )
}

interface AtListingCardProps {
  listing?: ClientListing
  finalCard?: boolean
  fullHeight?: boolean
  onClick?: (e: React.MouseEvent) => void
}

export default TimelineStatusFinalCard
