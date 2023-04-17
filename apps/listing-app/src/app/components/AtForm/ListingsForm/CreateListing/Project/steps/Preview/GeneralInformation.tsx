import { Box, Grid } from '@mui/material'
import React from 'react'
import AtFrame from '../../../../../../AtFrame/AtFrame'
import AtTypography from '../../../../../../AtTypography/AtTypography'
import { grey2 } from '../../../../../../../utils/colors'
import { plurialize } from '../../../../../../../utils/helpers'

const GeneralInformations: React.FunctionComponent<GeneralProps> = (
  props: GeneralProps,
) => {
  return (
    <AtFrame
      title={'General Information'}
      onClick={() => undefined}
      backgroundColor={'#FBFCFF'}
    >
      <Box display={'flex'} flexDirection={'column'} gap={'15px'}>
        <Grid container={true}>
          <Grid item={true} xs={4}>
            <AtTypography color={grey2}>Number of Individuals: </AtTypography>
          </Grid>
          <Grid item={true} xs={8}>
            <AtTypography>
              {props.listingGeneralInfo.individuals}
            </AtTypography>
          </Grid>
        </Grid>

        <Grid container={true}>
          <Grid item={true} xs={4}>
            <AtTypography color={grey2}>Work Type: </AtTypography>
          </Grid>
          <Grid item={true} xs={8}>
            <Box display={'flex'} gap={'15px'}>
              <AtTypography >
                {props.listingGeneralInfo.workType}
              </AtTypography>

              <AtTypography color={grey2} variant={'caption'}>
                GMT {props.listingGeneralInfo.timeZone}
              </AtTypography>
            </Box>
          </Grid>
        </Grid>

        <Grid container={true}>
          <Grid item={true} xs={4}>
            <AtTypography color={grey2}>Availability: </AtTypography>
          </Grid>
          <Grid item={true} xs={8}>
            <AtTypography >
              {props.listingGeneralInfo.availability}
            </AtTypography>
          </Grid>
        </Grid>

        <Grid container={true}>
          <Grid item={true} xs={4}>
            <AtTypography color={grey2}>Project Lenght: </AtTypography>
          </Grid>
          <Grid item={true} xs={8}>
            <AtTypography >
              {plurialize(props.listingGeneralInfo.projectLength, 'month')}
            </AtTypography>
          </Grid>
        </Grid>

        <Grid container={true}>
          <Grid item={true} xs={4}>
            <AtTypography color={grey2}>Start Date: </AtTypography>
          </Grid>
          <Grid item={true} xs={8}>
            <AtTypography >
              {props.listingGeneralInfo.startDate}
            </AtTypography>
          </Grid>
        </Grid>

        <Grid container={true}>
          <Grid item={true} xs={4}>
            <AtTypography color={grey2}>Rate: </AtTypography>
          </Grid>
          <Grid item={true} xs={8}>
            <Box display={'flex'} gap={'15px'}>
              <AtTypography >
                {props.listingGeneralInfo.exactRate ?? 'Variable'}:
              </AtTypography>

              <AtTypography color={grey2} variant={'caption'}>
                {!props.listingGeneralInfo.rateTo && 'From '}
                {props.listingGeneralInfo.rateFrom ? '£'+props.listingGeneralInfo.rateFrom : 'Not defined'}
                {props.listingGeneralInfo.rateTo && ' - £'+props.listingGeneralInfo.rateTo}
              </AtTypography>
            </Box>
          </Grid>
        </Grid>

        <Grid container={true}>
          <Grid item={true} xs={4}>
            <AtTypography color={grey2}>Difficulty: </AtTypography>
          </Grid>
          <Grid item={true} xs={8}>
            <AtTypography >
              {props.listingGeneralInfo.difficulty}
            </AtTypography>
          </Grid>
        </Grid>

        <Grid container={true}>
          <Grid item={true} xs={4}>
            <AtTypography color={grey2}>Learning links: </AtTypography>
          </Grid>
          <Grid item={true} xs={8}>
            <AtTypography >
              {props.listingGeneralInfo.learningLink ?? 'No links attached'}
            </AtTypography>
          </Grid>
        </Grid>
      </Box>
    </AtFrame>
  )
}

interface GeneralProps {
  listingGeneralInfo: any
}

export default GeneralInformations
