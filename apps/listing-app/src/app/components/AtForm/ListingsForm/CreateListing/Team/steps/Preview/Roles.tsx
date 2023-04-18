import { Box } from '@mui/material'
import React from 'react'
import AtFrame from '../../../../../../AtFrame/AtFrame'
import AtTypography from '../../../../../../AtTypography/AtTypography'
import AtLine from '../../../../../../AtLine/AtLine'
import { grey2 } from '../../../../../../../utils/colors'
import { getCurrencySymbol } from '../../../../../../../utils/helpers'

const Roles: React.FunctionComponent<RolesProps> = (
  props: RolesProps,
) => {
  return (
    <AtFrame
      title={'Roles'}
      onClick={() => undefined}
      backgroundColor={'#FBFCFF'}
    >
      <Box display={'grid'} gridTemplateColumns={'50% 50%'} gap={'10px'}>
        {props.listingGeneralInfo.roles?.map(
          (role: { roleName: string, description: string, price?: string }, index: number) => {
            return (
              <AtFrame
                key={index}
                backgroundColor={'#FFF'}
              >
                <Box display={'flex'} gap={'10px'}>
                  <AtTypography variant='subtitle1' $bold>{role.roleName}</AtTypography>
                  <AtTypography color={grey2} variant={'caption'}>
                    {getCurrencySymbol(props.listingGeneralInfo.currency)}{role.price}
                  </AtTypography>
                </Box>
                <AtLine />
                <AtTypography variant={role.description ? 'body2' : 'caption'}>{role.description ? role.description : 'No description added.'}</AtTypography>
              </AtFrame>
            )
          },
        )}
      </Box>
    </AtFrame>
  )
}

interface RolesProps {
  listingGeneralInfo: any
}

export default Roles
