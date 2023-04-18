import { Box } from '@mui/material'
import React from 'react'
import AtFrame from '../../../../../../AtFrame/AtFrame'
import AtTag from '../../../../../../../components/AtTag/AtTag'

const Skills: React.FunctionComponent<SkillsProps> = (
  props: SkillsProps,
) => {
  return (
    <AtFrame
      title={'Skills'}
      onClick={() => undefined}
      backgroundColor={'#FBFCFF'}
    >
      <Box display={'flex'} flexWrap={'wrap'} gap={'10px'}>
        {props.listingGeneralInfo.skills?.map(
          (skill: string, index: number) => {
            return (
              <AtTag
                label={skill}
                key={index}
              />
            )
          },
        )}
      </Box>
    </AtFrame>
  )
}

interface SkillsProps {
  listingGeneralInfo: any
}

export default Skills
