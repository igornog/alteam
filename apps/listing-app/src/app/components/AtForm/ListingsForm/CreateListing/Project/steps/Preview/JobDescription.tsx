import { Box, Collapse } from '@mui/material'
import { ArrowDown, ArrowUp } from 'iconsax-react'
import React, { useState } from 'react'
import AtButton, {
  AtButtonKind,
  AtButtonVariant,
} from '../../../../../../AtButton/AtButton'
import AtFrame from '../../../../../../../components/AtFrame/AtFrame'
import AtTypography from '../../../../../../AtTypography/AtTypography'

const JobDescription: React.FunctionComponent<JobDescriptionProps> = (
  props: JobDescriptionProps,
) => {
  const [collapseDescription, setCollapseDescription] = useState(false)

  return (
    <AtFrame
      title={'Job Description'}
      onClick={() => undefined}
      backgroundColor={'#FBFCFF'}
    >
      <Collapse in={collapseDescription} collapsedSize={40}>
        <AtTypography>
          {props.listingGeneralInfo.jobDescription}
        </AtTypography>
      </Collapse>

      <Box display={'flex'}>
        <AtButton
          kind={AtButtonKind.Default}
          variant={AtButtonVariant.Text}
          startIcon={collapseDescription ? <ArrowUp /> : <ArrowDown />}
          name={`${collapseDescription ? 'Hide' : 'View'} Full Description`}
          fontSize={'14px'}
          onClick={() => setCollapseDescription(!collapseDescription)}
        />
      </Box>
    </AtFrame>
  )
}

interface JobDescriptionProps {
  listingGeneralInfo: any
}

export default JobDescription
