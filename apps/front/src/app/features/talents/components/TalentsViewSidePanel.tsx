import { Box } from '@mui/material';
import { AddCircle, FilterSquare, Refresh, SearchNormal1 } from 'iconsax-react';
import React from 'react';
import styled from 'styled-components';
import AtButton, {
  AtButtonKind,
  AtButtonVariant,
} from '../../../components/AtButton/AtButton';
import AtLine from '../../../components/AtLine/AtLine';
import AtSpace from '../../../components/AtSpace/AtSpace';
import AtTextField from '../../../components/AtTextField/AtTextField';
import AtTypography from '../../../components/AtTypography/AtTypography';
import { black, green, grey2, grey5, white } from '../../../utils/colors';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/reduxHook';
import {
  handleActiveFilter,
  handleRefreshFilters,
} from '../../../utils/redux/actions/settings.action';
import { Filter } from '../../../utils/redux/types/settings.type';

const StyledFilters = styled.div`
  background-color: ${white};
  border-left: 1px solid ${grey5};
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  width: 235px;
  box-sizing: border-box;
  padding: 30px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledAddCircle = styled(AddCircle)<{ active?: boolean }>`
  transition: transform 0.3s;
  transform: rotate(${({ active }) => (active ? '225' : '0')}deg);
`;

const StyledBox = styled(Box)<{ active?: boolean }>`
  transition: 0.3s;
  color: ${({ active }) => (active ? black : grey2)};

  &:hover {
    transition: 0.3s;

    color: ${({ active }) => (active ? green : black)};
    cursor: pointer;
  }
`;

const TalentsViewSidePanel: React.FunctionComponent = () => {
  const settings = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();

  const handleClick = (filter: Filter, section: 'skills' | 'jobTypes') => {
    dispatch(handleActiveFilter({ filter, section }));
  };

  const handleRefresh = () => {
    dispatch(handleRefreshFilters());
  };
  return (
    <StyledFilters>
      <Box display={'flex'} flexDirection={'column'}>
        <AtTypography color={grey2}>
          <FilterSquare /> Filters
        </AtTypography>

        <AtSpace direction={'vertical'} spacing={'20'} />

        <AtTypography variant={'h5'}>Skills</AtTypography>

        <AtSpace direction={'vertical'} spacing={'10'} />

        <AtTextField
          size={'small'}
          startIcon={<SearchNormal1 />}
          placeholder={'Search in Skills'}
        />

        <Box
          display={'flex'}
          marginTop={'10px'}
          flexDirection={'column'}
          gap={1.5}
        >
          {settings.filters.skills.map((filter: Filter, index: number) => (
            <StyledBox
              display={'flex'}
              width={'100%'}
              justifyContent={'space-between'}
              key={index}
              active={filter.active}
              onClick={() => handleClick(filter, 'skills')}
            >
              <AtTypography>{filter.label}</AtTypography>
              <StyledAddCircle size={20} active={filter.active} />
            </StyledBox>
          ))}
        </Box>

        <AtLine spacing={22} color={grey5} />

        <AtTypography variant={'h5'}>Job Type</AtTypography>

        <Box
          display={'flex'}
          marginTop={'10px'}
          flexDirection={'column'}
          gap={1.5}
        >
          {settings.filters.jobTypes.map((jobType: Filter, index: number) => (
            <Box
              display={'flex'}
              width={'100%'}
              justifyContent={'space-between'}
              key={index}
              color={jobType.active ? black : grey2}
            >
              <AtTypography>{jobType.label}</AtTypography>
              <StyledAddCircle
                size={20}
                onClick={() => handleClick(jobType, 'jobTypes')}
                active={jobType.active}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <AtButton
        kind={AtButtonKind.Default}
        variant={AtButtonVariant.Outlined}
        name={'Reset Filters'}
        endIcon={<Refresh />}
        onClick={() => handleRefresh()}
      />
    </StyledFilters>
  );
};

export default TalentsViewSidePanel;
