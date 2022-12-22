import { Box } from '@mui/material'
import React, { useState } from 'react'
import AtLine from '../../../../../AtLine/AtLine'
import AtTextField from '../../../../../AtTextField/AtTextField'
import AtTypography from '../../../../../AtTypography/AtTypography'
import { StyledForm } from '../../DrawerCreateListing'
import { grey2 } from '../../../../../../utils/colors'
import { SearchNormal1 } from 'iconsax-react'
import AtTag from '../../../../../AtTag/AtTag'
import { Skill } from '../../../../../../utils/redux/types/talents.type'

const ProjectStep3: React.FunctionComponent = () => {
  const [skills, setSkills] = useState([
    { label: 'UI/UX Design' },
    { label: 'Figma' },
    { label: 'Sketch' },
    { label: 'Wireframe' },
    { label: 'Prototyping' },
    { label: 'Prototyping' },
    { label: 'Wireframe' },
  ])

  const handleDeleteTag = (value: string) => {
    setSkills(skills.filter((skill) => skill.label !== value))
  }

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
      <StyledForm>
        <Box padding={'20px'} display={'flex'} justifyContent={'space-between'}>
          <AtTypography variant={'h4'}>Add Skills</AtTypography>
          <AtTypography variant={'caption'} color={grey2}>
            Fields with * are mandatory
          </AtTypography>
        </Box>
        <AtLine />
        <Box display={'flex'} flexDirection={'column'} gap={2.5} padding={2.5}>
          <AtTextField
            placeholder={'Search in Skills'}
            value={''}
            startIcon={<SearchNormal1 />}
            size={'small'}
          />
          <Box display={'flex'} flexWrap={'wrap'} gap={'10px'}>
            {skills && skills.length > 0 ? (
              skills?.map((skill: Skill, index) => {
                return (
                  <AtTag
                    label={skill.label}
                    onDelete={() => handleDeleteTag(skill.label)}
                    key={index}
                  />
                )
              })
            ) : (
              <AtTypography color={grey2}>
                No skills have been added by the talent, please add them by
                searching below. Please note that you may add only up to 5
                skills.{' '}
              </AtTypography>
            )}
          </Box>
        </Box>
      </StyledForm>
    </Box>
  )
}

export default ProjectStep3
