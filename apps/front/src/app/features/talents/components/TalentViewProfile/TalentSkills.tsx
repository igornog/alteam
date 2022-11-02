import { Box } from '@mui/material';
import { Edit } from 'iconsax-react';
import React from 'react';
import AtTag from '../../../../components/AtTag/AtTag';
import AtTalentFrame from '../../../../components/AtTalentFrame/AtTalentFrame';
import AtTypography from '../../../../components/AtTypography/AtTypography';
import { grey } from '../../../../utils/colors';
import { useAppDispatch } from '../../../../utils/hooks/reduxHook';
import { handleModal } from '../../../../utils/redux/actions/settings.action';
import { ModalVariant } from '../../../../utils/redux/types/settings.type';
import { Skill, Talent } from '../../../../utils/redux/types/talents.type';

const TalentSkills: React.FunctionComponent<TalentSkillsProps> = (
  props: TalentSkillsProps
) => {
  const dispatch = useAppDispatch();

  const handleEditSkills = () => {
    dispatch(handleModal(ModalVariant.Skills));
  };

  return (
    <AtTalentFrame
      title={'Skills'}
      icon={
        <AtTypography>
          <Edit size={16} />
          Edit
        </AtTypography>
      }
      onClick={handleEditSkills}
    >
      <Box display={'flex'} flexWrap={'wrap'} gap={'10px'}>
        {props.talent.skills && props.talent.skills?.length > 0 ? (
          props.talent.skills?.map((skill: Skill, index: number) => (
            <AtTag label={skill.label} delete={false} key={index} />
          ))
        ) : (
          <AtTypography color={grey}>
            No skills have been added by the talent, please add them by
            searching below. Please note that you may add only up to 5 skills.
          </AtTypography>
        )}
      </Box>
    </AtTalentFrame>
  );
};

interface TalentSkillsProps {
  talent: Talent;
}

export default TalentSkills;