import { Box } from '@mui/material'
import React, { Dispatch } from 'react'
import AtLine from '../../../../../AtLine/AtLine'
import AtTextField from '../../../../../AtTextField/AtTextField'
import AtTypography from '../../../../../AtTypography/AtTypography'
import { StyledForm } from '../../CreateListingStart'
import { grey2 } from '../../../../../../utils/colors'
import { SearchNormal1 } from 'iconsax-react'
import AtTag from '../../../../../AtTag/AtTag'
import { Listing } from '../../../../../../utils/redux/types/listings.type'

const ProjectStep3: React.FC<Step3Props> = (props: Step3Props) => {
  const maxSkills = 7

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'20px'}>
      <StyledForm>
        <Box
          padding={'20px'}
          display={'flex'}
          justifyContent={'space-between'}
          flexDirection={props.isSmallScreen ? 'column' : 'row'}
        >
          <AtTypography
            variant={'h4'}
            fontSize={props.isSmallScreen ? '1.625rem' : '2.125rem'}
          >
            Add Skills
          </AtTypography>
          <AtTypography variant={'caption'} color={grey2}>
            Fields with * are mandatory
          </AtTypography>
        </Box>

        <AtLine />

        <Box display={'flex'} flexDirection={'column'} gap={2.5} padding={2.5}>
          <AtTextField
            placeholder={'Search in Skills'}
            onPressEnter={(e) => {
              if (props.project.skills?.length < maxSkills) {
                props.setProject({
                  ...props.project,
                  skills: [...props.project.skills, e],
                })
              }
            }}
            startIcon={<SearchNormal1 />}
            size={'small'}
          />

          <Box display={'flex'} flexWrap={'wrap'} gap={'10px'}>
            {props.project.skills?.length > 0 ? (
              props.project.skills?.map((skill: string, index: number) => {
                return (
                  <AtTag
                    label={skill}
                    key={index}
                    onDelete={() =>
                      props.setProject({
                        ...props.project,
                        skills: props.project.skills.filter(
                          (item: string) => item !== skill,
                        ),
                      })
                    }
                  />
                )
              })
            ) : (
              <AtTypography color={grey2}>
                No skills have been added by the talent, please add them by
                searching below. Please note that you may add only up to 7
                skills.
              </AtTypography>
            )}
          </Box>
        </Box>
      </StyledForm>
    </Box>
  )
}

interface Step3Props {
  setProject: Dispatch<React.SetStateAction<Listing>>
  project: Listing
  isSmallScreen?: boolean
}

export default ProjectStep3
