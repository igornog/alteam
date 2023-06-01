
import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { green, grey3, grey5, white } from '../../../utils/colors'
import AtTypography from '../../Typography/Typography'
import { boxShadow } from '../../../utils/theme'
import moment from 'moment'
import { ClientListing } from '@yjcapp/app'
import Typography from '../../Typography/Typography'

export const StyledCard = styled.div<{ fullHeight?: boolean, isSmallScreen?: boolean }>`
  display: flex;
  background-color: ${white};
  max-width: 20%;
  border: 1px solid ${grey5};
  border-radius: 5px;
  padding: 20px;
  transition: 0.3s;

  &:hover {
    box-shadow: ${boxShadow};
    transition: 0.3s;
    cursor: pointer;
    border-color: ${green};
  }
`

const TimelineStatusCard: React.FunctionComponent<AtListingCardProps> = (
  props: AtListingCardProps,
) => {
  const isSmallScreen = useMediaQuery('(max-width:1079px)')

  return (
    <StyledCard onClick={props.onClick} fullHeight={props.fullHeight} isSmallScreen={isSmallScreen}>
      <Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          height={'100%'}
        >
          <Box display={'flex'} gap={'10px'} flexDirection={'column'} width={'100%'}>
            <Box
              display={'flex'}
              gap={'5px'}
              height={'100%'}
              flexDirection={'column'}
              justifyContent={'space-between'}
            >
              <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                <AtTypography fontWeight={600}>
                  {'Alteam Lorem Ipsum Dolor'}
                </AtTypography>
                <AtTypography color={grey3}>
                  {'Lorem ipsum dolor sit amet consectetur. Viverra egestas mus mauris sed tortor.'}
                </AtTypography>
              </Box>
              <AtTypography color={grey3}>
                <>Created on: {moment(props.listing?.createdAt).format('DD.MM.YYYY')}</>
              </AtTypography>
            </Box>
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

export default TimelineStatusCard
