import { Box } from '@mui/material';
import { CloseSquare, TickSquare } from 'iconsax-react';
import React from 'react';
import AtButton, {
  AtButtonKind,
  AtButtonVariant,
} from '../../AtButton/AtButton';
import AtDropdown from '../../AtDropdown/AtDropdown';
import AtTextField from '../../AtTextField/AtTextField';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/reduxHook';
import { handleModal } from '../../../utils/redux/actions/settings.action';
import { getActiveTalent } from '../../../utils/redux/selectors/talents.selector';
import AtTypography from '../../AtTypography/AtTypography';
import { AtModalHeader, AtModalContent } from '../AtModal';

const ModalGeneralInformations: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const selectedTalent = useAppSelector((state) => getActiveTalent(state));
  const handleClose = () => dispatch(handleModal(null));

  return (
    <>
      <AtModalHeader
        title={
          <AtTypography variant={'h4'}>Edit General Information</AtTypography>
        }
      />

      <AtModalContent padding={'0 20px 20px 20px'}>
        <Box display={'flex'} flexDirection={'column'} gap={3.5}>
          <AtTextField
            defaultValue={selectedTalent.jobName}
            placeholder={selectedTalent.jobName ?? 'N/A'}
            label={'Role'}
          />

          <AtTextField
            defaultValue={selectedTalent.salary}
            placeholder={selectedTalent.salary ?? 'N/A'}
            label={'Salary Expectations'}
          />

          <AtDropdown
            fullWidth={true}
            listItems={[
              {
                id: 0,
                label: 'Full Time',
              },
              {
                id: 1,
                label: 'Part Time',
              },
            ]}
            label={'Availability'}
          />

          <AtDropdown
            fullWidth={true}
            listItems={[
              {
                id: 0,
                label: 'Senior',
              },
              {
                id: 1,
                label: 'Junior',
              },
            ]}
            label={'Work Experience'}
          />

          <AtTextField
            defaultValue={selectedTalent.portfolio}
            placeholder={selectedTalent.portfolio ?? 'N/A'}
            label={'Portfolio Link'}
          />

          <AtTextField
            defaultValue={selectedTalent.email}
            placeholder={selectedTalent.email ?? 'N/A'}
            label={'Email'}
          />

          <AtTextField
            defaultValue={selectedTalent.phone}
            placeholder={selectedTalent.phone ?? 'N/A'}
            label={'Phone Number'}
          />

          <Box display={'flex'} justifyContent={'flex-end'}>
            <AtButton
              onClick={handleClose}
              kind={AtButtonKind.Danger}
              variant={AtButtonVariant.Text}
              name={'Cancel'}
              endIcon={<CloseSquare size={16} />}
            />
            <AtButton
              onClick={handleClose}
              kind={AtButtonKind.Success}
              variant={AtButtonVariant.Contained}
              name={'Save Changes'}
              endIcon={<TickSquare size={16} />}
            />
          </Box>
        </Box>
      </AtModalContent>
    </>
  );
};

export default ModalGeneralInformations;
