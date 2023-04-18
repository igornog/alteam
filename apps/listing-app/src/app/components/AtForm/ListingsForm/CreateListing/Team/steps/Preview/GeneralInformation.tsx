import { Box, Grid } from '@mui/material'
import React from 'react'
import AtFrame from '../../../../../../AtFrame/AtFrame'
import AtTypography from '../../../../../../AtTypography/AtTypography'
import { grey2 } from '../../../../../../../utils/colors'
import { getCurrencySymbol, plurialize } from '../../../../../../../utils/helpers'
import { WorkType } from '@yjcapp/app'

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

              {props.listingGeneralInfo.workType !== WorkType.OnSite &&
                <AtTypography color={grey2} variant={'caption'}>
                  GMT {props.listingGeneralInfo.timeZone}
                </AtTypography>}
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
            <AtTypography color={grey2}>Project Length: </AtTypography>
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

              <AtTypography>
                {getCurrencySymbol(props.listingGeneralInfo.currency)}
                {props.listingGeneralInfo.roles.reduce((acc: any, role: { price: any }) => {
                  if (role.price) {
                    return acc + role.price
                  }

                  return acc
                }, 0)}</AtTypography>
              {props.listingGeneralInfo.exactRate &&
                <>
                  <span>{'/'}</span>
                  <AtTypography >
                    {getCurrencySymbol(props.listingGeneralInfo.currency)}
                    {props.listingGeneralInfo.exactRate}
                  </AtTypography>
                </>
              }
              <AtTypography color={grey2} variant={'caption'}>
                monthly
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
