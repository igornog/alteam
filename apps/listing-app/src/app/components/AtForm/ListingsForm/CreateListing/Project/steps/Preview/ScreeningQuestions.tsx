import { Box } from '@mui/material'
import React from 'react'
import AtFrame from '../../../../../../AtFrame/AtFrame'
import AtLine from '../../../../../../AtLine/AtLine'
import AtTypography from '../../../../../../AtTypography/AtTypography'

const ScreeningQuestions: React.FunctionComponent<QuestionsProps> = (
  props: QuestionsProps,
) => {
  return (
    <AtFrame
      title={'Screening questions'}
      onClick={() => undefined}
      backgroundColor={'#FBFCFF'}
    >
      <Box display={'flex'} flexDirection={'column'}>
        {props.listingGeneralInfo.questions?.map(
          (question: string, index: number) => {
            return (
              <>
                <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                  <AtTypography variant={'body1'}>
                    Question {index + 1}:
                  </AtTypography>
                  <AtTypography>{question}</AtTypography>
                </Box>
                {index < props.listingGeneralInfo.questions.length - 1 && (
                  <AtLine spacing={15} />
                )}
              </>
            )
          },
        )}
      </Box>
    </AtFrame>
  )
}

interface QuestionsProps {
  listingGeneralInfo: any
}

export default ScreeningQuestions
