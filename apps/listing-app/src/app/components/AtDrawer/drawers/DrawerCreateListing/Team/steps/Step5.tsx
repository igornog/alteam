import { Box } from '@mui/material'
import React from 'react'
import AtLine from '../../../../../AtLine/AtLine'
import AtTextField from '../../../../../AtTextField/AtTextField'
import AtTypography from '../../../../../AtTypography/AtTypography'
import { StyledForm } from '../../DrawerCreateListing'
import { grey2 } from '../../../../../../utils/colors'
import { Listing } from '../../../../../../utils/redux/types/listings.type'

const TeamStep5: React.FC<Step5Props> = (props: Step5Props) => {
  const handleArrayValueChange = (
    index: number,
    setFunc: (val: any) => void,
    array: any[],
    newValue: string,
  ) => {
    const newArray = [...array]
    newArray[index] = newValue
    setFunc({
      ...props.team,
      questions: newArray,
    })
  }

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
            Screening Questions
          </AtTypography>
          <AtTypography variant={'caption'} color={grey2}>
            Fields with * are mandatory
          </AtTypography>
        </Box>

        <AtLine />

        <Box
          padding={'20px'}
          display={'flex'}
          flexDirection={'column'}
          gap={'50px'}
        >
          <Box display={'flex'} gap={'30px'} flexDirection={'column'}>
            <AtTextField
              label={'Screening Question 1'}
              placeholder={'Enter Screening Question'}
              maxLength={100}
              onValueChange={(e) =>
                handleArrayValueChange(
                  0,
                  props.setTeam,
                  props.team.questions,
                  e,
                )
              }
            />

            <AtTextField
              label={'Screening Question 2'}
              placeholder={'Enter Screening Question'}
              maxLength={100}
              disabled={props.team.questions?.length < 1}
              onValueChange={(e) =>
                handleArrayValueChange(
                  1,
                  props.setTeam,
                  props.team.questions,
                  e,
                )
              }
            />

            <AtTextField
              label={'Screening Question 3'}
              placeholder={'Enter Screening Question'}
              maxLength={100}
              disabled={props.team.questions?.length < 2}
              onValueChange={(e) =>
                handleArrayValueChange(
                  2,
                  props.setTeam,
                  props.team.questions,
                  e,
                )
              }
            />
          </Box>
        </Box>
      </StyledForm>
    </Box>
  )
}

interface Step5Props {
  setTeam: React.Dispatch<React.SetStateAction<Listing>>
  team: Listing
  isSmallScreen?: boolean
}

export default TeamStep5
